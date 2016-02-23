'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var del = require('del');
var fs = require('fs');

var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

gulp.task('zip', function () {
  var filter = $.filter('README.md', {restore: true});
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
    .pipe($.zip(pkg.name + '.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, 'dist'));

gulp.task('default', function (callback) {
  runSequence('clean', 'zip', callback);
});
