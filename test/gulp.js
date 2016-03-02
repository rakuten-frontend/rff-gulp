/* eslint-env mocha */
'use strict';

var rewire = require('rewire');
var gulpfile = rewire('../templates/gulpfile');
var gulp = gulpfile.__get__('gulp');
var runSequence = require('run-sequence').use(gulp);
var assert = require('assert');
var path = require('path');
var originalCwd = process.cwd();

describe('gulp', function () {
  before(function () {
    process.chdir(path.join(__dirname, '../templates'));
  });

  after(function () {
    process.chdir(originalCwd);
  });

  describe('task "lint"', function () {
    it('completes without error', function (done) {
      runSequence('lint', function (err) {
        assert(!err);
        done();
      });
    });
  });
});
