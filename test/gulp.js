/* eslint-env mocha */
'use strict';

var rewire = require('rewire');
var gulpfile = rewire('../templates/gulpfile');
var gulp = gulpfile.__get__('gulp');
var bs = gulpfile.__get__('bs');
var runSequence = require('run-sequence').use(gulp);
var assert = require('yeoman-assert');
var path = require('path');
var request = require('request');
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
        if (err) {
          throw err;
        }
        done();
      });
    });
  });

  describe('task "build"', function () {
    before(function (done) {
      runSequence('build', function (err) {
        if (err) {
          throw err;
        }
        done();
      });
    });

    it('outputs files into "dist" directory', function () {
      assert.file([
        'dist/index.html',
        'dist/styles',
        'dist/scripts',
        'dist/images',
        'dist/fonts'
      ]);
    });
  });

  describe('task "default"', function () {
    it('completes without error', function (done) {
      runSequence('default', function (err) {
        if (err) {
          throw err;
        }
        done();
      });
    });
  });

  describe('task "serve"', function () {
    before(function (done) {
      runSequence('serve', function (err) {
        if (err) {
          throw err;
        }
        done();
      });
    });

    after(function () {
      bs.exit();
    });

    it('outputs css and js into ".tmp" directory', function () {
      assert.file([
        '.tmp/styles/main.css',
        '.tmp/scripts/main.js'
      ]);
    });

    it('responds to HTTP request', function (done) {
      if (bs.active) {
        testRequest();
      } else {
        bs.emitter.on('init', testRequest);
      }
      function testRequest() {
        var url = bs.getOption('urls').get('local');
        request(url, function (err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.statusCode, 200);
          assert.notEqual(res.body, '');
          done();
        });
      }
    });
  });

  describe('task "serve:dist"', function () {
    before(function (done) {
      runSequence('serve:dist', function (err) {
        if (err) {
          throw err;
        }
        done();
      });
    });

    after(function () {
      bs.exit();
    });

    it('responds to HTTP request', function (done) {
      if (bs.active) {
        testRequest();
      } else {
        bs.emitter.on('init', testRequest);
      }
      function testRequest() {
        var url = bs.getOption('urls').get('local');
        request(url, function (err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.statusCode, 200);
          assert.notEqual(res.body, '');
          done();
        });
      }
    });
  });
});
