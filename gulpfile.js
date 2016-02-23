'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('zip', function () {
  return gulp.src([
    'templates/*',
    'templates/app/**',
    '!**/.DS_Store'
  ], {
    base: 'templates',
    dot: true
  })
    .pipe($.ignore.include({isFile: true}))
    .pipe($.zip('archive.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, 'dist'));

gulp.task('default', function (callback) {
  runSequence('clean', 'zip', callback);
});
