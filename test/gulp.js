/* eslint-env mocha */
'use strict';

var rewire = require('rewire');
var gulpfile = rewire('../templates/gulpfile');
var gulp = gulpfile.__get__('gulp');
var runSequence = require('run-sequence').use(gulp);
var assert = require('assert');

describe('gulp', function () {
  it('task "lint" completes without error', function (done) {
    runSequence('lint', function (err) {
      assert(!err);
      done();
    });
  });
});
