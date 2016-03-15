'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var GitHubApi = require('github4');
var hostedGitInfo = require('hosted-git-info');
var pify = require('pify');
var del = require('del');
var fs = require('fs');
var config = require('config');

var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
var pkgName = pkg.name + '-v' + pkg.version;
var github = new GitHubApi();

gulp.task('lint', function () {
  return gulp.src([
    '*.js',
    'test/*.js',
    'templates/*.js'
  ])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('unit-test', function () {
  return gulp.src('test/*.js')
    .pipe($.spawnMocha({
      reporter: 'spec',
      timeout: 20000,
      istanbul: true
    }));
});

gulp.task('coveralls', ['unit-test'], function () {
  if (!process.env.TRAVIS) {
    return;
  }
  return gulp.src('coverage/lcov.info')
    .pipe($.coveralls());
});

gulp.task('test', ['lint', 'unit-test', 'coveralls']);

gulp.task('clean', del.bind(null, 'dist'));

gulp.task('build', ['test'], function () {
  var filter = $.filter('templates/README.md', {restore: true});
  return gulp.src([
    'templates/*',
    'templates/app/**',
    '!**/.DS_Store'
  ], {
    base: 'templates',
    dot: true
  })
    .pipe($.ignore.include({isFile: true}))
    .pipe(filter)
    .pipe($.ejs({pkg: pkg}))
    .pipe(filter.restore)
    .pipe($.rename(function (path) {
      path.dirname = pkgName + '/' + path.dirname;
    }))
    .pipe($.zip(pkgName + '.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('release', ['build'], function () {
  var repo = hostedGitInfo.fromUrl(pkg.repository.url);
  var releaseNote =
    'Download **' + pkgName + '.zip** or use [generator-rff-gulp](https://github.com/rakuten-frontend/generator-rff-gulp).\n' +
    'See [CHANGELOG.md](https://github.com/' + repo.path() + '/blob/master/CHANGELOG.md) for all release notes.';
  github.authenticate(config.auth);
  return pify(github.repos.createRelease)({
    user: repo.user,
    repo: repo.project,
    tag_name: 'v' + pkg.version,    // eslint-disable-line camelcase
    body: releaseNote
  })
    .then(function (res) {
      $.util.log($.util.colors.green('Release "' + res.tag_name + '" created'));
      return res.id;
    })
    .then(function (id) {
      return pify(github.repos.uploadAsset)({
        user: repo.user,
        repo: repo.project,
        id: id,
        name: pkgName + '.zip',
        filePath: 'dist/' + pkgName + '.zip'
      });
    })
    .then(function (res) {
      $.util.log($.util.colors.green('Asset "' + res.name + '" uploaded'));
    });
});

gulp.task('default', ['build']);
