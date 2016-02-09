'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var vinylPaths = require('vinyl-paths');
var globby = require('globby');
var mergeStream = require('merge-stream');
var path = require('path');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var watchify = require('watchify');
var bs = require('browser-sync').create();
var del = require('del');

var browsers = [
  'last 2 versions',
  'Explorer >= 8',
  'Firefox ESR',
  'Android >= 2.3',
  'iOS >= 7'
];
var entries = [];

// Lint JavaScript
gulp.task('lint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

// Build stylesheets for local development
gulp.task('styles:dev', ['sprites', 'fonts'], function () {
  return gulp.src('app/styles/**/*.scss')
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: browsers}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/styles'));
});

// Build stylesheets for production
gulp.task('styles', ['sprites', 'fonts'], function () {
  return gulp.src('app/styles/**/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: browsers}))
    .pipe($.minifyCss({sourceMap: false}))
    .pipe(gulp.dest('dist/styles'));
});

// Generate CSS sprites from PNG files
gulp.task('sprites', function () {
  return gulp.src('app/images/_sprites/*.png')
    .pipe($.newer('app/images/sprites.png'))
    .pipe($.spritesmith({
      imgName: 'images/sprites.png',
      cssName: 'styles/sprites.css',
      padding: 2,
      cssOpts: {
        cssSelector: function (item) {
          return '.sprite-' + item.name;
        }
      }
    }))
    .pipe(gulp.dest('app'));
});

// Generate icon fonts from SVG files
gulp.task('fonts', function () {
  return gulp.src('app/fonts/_glyphs/*.svg')
    .pipe($.newer('app/styles/glyphs.css'))
    .pipe($.iconfontCss({
      fontName: 'glyphs',
      targetPath: '../styles/glyphs.css',   // Relative path from gulp.dest()
      fontPath: '../fonts/',                // Base url(...) in CSS code
      cssClass: 'glyph'
    }))
    .pipe($.iconfont({
      fontName: 'glyphs',
      appendUnicode: true,
      formats: ['eot', 'woff2', 'woff', 'ttf', 'svg']
    }))
    .pipe(gulp.dest('app/fonts'));
});

// Build and watch scripts for local development
gulp.task('scripts:dev', function () {
  var stream = mergeStream();
  globby.sync('app/scripts/*.js').forEach(function (file) {
    if (entries.indexOf(file) !== -1) {
      return;
    }
    var bundler = browserify({
      entries: file,
      cache: {},
      packageCache: {},
      plugin: [watchify],
      debug: true
    });
    bundler
      .on('log', $.util.log)
      .on('update', bundle);
    stream.add(bundle());
    entries.push(file);
    function bundle() {
      return bundler.bundle()
        .on('error', function (error) {
          $.util.log($.util.colors.red('Browserify error:') + '\n' + error.message);
          this.emit('end');
        })
        .pipe(source(path.relative('app/scripts', file)))
        .pipe(gulp.dest('.tmp/scripts'));
    }
  });
  return stream.isEmpty() ? null : stream;
});

// Build scripts for production
gulp.task('scripts', function () {
  var stream = mergeStream();
  globby.sync('app/scripts/*.js').forEach(function (file) {
    var bundleStream = browserify(file).bundle()
      .on('error', function (error) {
        $.util.log($.util.colors.red('Browserify error:') + '\n' + error.message);
        this.emit('end');
      })
      .pipe(source(path.relative('app/scripts', file)))
      .pipe(buffer())
      .pipe($.uglify())
      .pipe(gulp.dest('dist/scripts'));
    stream.add(bundleStream);
  });
  return stream.isEmpty() ? null : stream;
});

// Minify HTML
gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe($.htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('images', ['sprites'], function () {
  return gulp.src([
    'app/images/**',
    '!app/images/_*{,/**}'
  ])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});

// Copy all extra files like favicon, .htaccess
gulp.task('extras', function () {
  return gulp.src([
    'app/**',
    '!app/{styles,scripts,images}/**',
    '!app/fonts/_*{,/**}',
    '!**/{*.html,.DS_Store}'
  ], {dot: true})
    .pipe(gulp.dest('dist'));
});

// Static asset revisioning: "main.css" -> "main-e90e18eef7.css"
gulp.task('filerev', function () {
  return gulp.src('dist/**/*.{css,js,png,jpg,gif,eot,svg,ttf,woff,woff2}')
    .pipe(vinylPaths(del))
    .pipe($.rev())
    .pipe(gulp.dest('dist'))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('.tmp'));
});

gulp.task('rev', ['filerev'], function () {
  var manifest = gulp.src('.tmp/rev-manifest.json');
  return gulp.src('dist/**/*.{html,css}')
    .pipe($.revReplace({manifest: manifest}))
    .pipe(gulp.dest('dist'));
});

// Clean output directories
gulp.task('clean:tmp', del.bind(null, '.tmp'));
gulp.task('clean:dist', del.bind(null, 'dist'));

// Start browsersync development server
gulp.task('serve', ['pre:serve'], function () {
  bs.init({
    notify: false,
    server: {
      baseDir: ['.tmp', 'app']
    },
    files: ['app/**/*.html', '.tmp/**']
  });
  gulp.watch('app/scripts/*.js', function (event) {
    if (event.type === 'added' || event.type === 'renamed') {
      runSequence('scripts:dev');
    }
  });
  gulp.watch('app/scripts/**/*.js', ['lint']);
  gulp.watch('app/styles/**/*.scss', ['styles:dev']);
  gulp.watch('app/images/_sprites/*.png', ['styles:dev']);
  gulp.watch('app/fonts/_glyphs/*.svg', ['styles:dev']);
});

gulp.task('pre:serve', function (callback) {
  runSequence('clean:tmp', ['styles:dev', 'scripts:dev'], callback);
});

// Start local server from the "dist" directory
gulp.task('serve:dist', function () {
  bs.init({
    notify: false,
    server: 'dist'
  });
});

// Build production files
gulp.task('build', function (callback) {
  runSequence('clean:dist', ['html', 'styles', 'scripts', 'images', 'extras'], 'rev', callback);
});

// Push production files to "gh-pages" branch
gulp.task('deploy', ['default'], function () {
  return gulp.src('dist/**/*')
    .pipe($.ghPages());
});

// Default task: lint and build files
gulp.task('default', function (callback) {
  runSequence('lint', 'build', callback);
});
