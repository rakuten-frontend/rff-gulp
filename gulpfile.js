'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('zip', function () {
  return gulp.src([
    'templates/*',
    'templates/app/**',
    '!**/.DS_Store'
  ], {dot: true})
  .pipe($.ignore.include({isFile: true}))
    .pipe(require('gulp-debug')())
    .pipe($.zip('archive.zip'))
    .pipe(gulp.dest('dist'));
});
