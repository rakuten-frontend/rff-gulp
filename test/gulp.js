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

    it('outputs css and js under ".tmp" directory', function () {
      assert.file([
        '../templates/.tmp/styles/main.css',
        '../templates/.tmp/scripts/main.js'
      ]);
    });

    it('responds to HTTP request', function (done) {
      if (bs.active) {
        testRequest();
      } else {
        bs.emitter.on('init', testRequest);
      }
      function testRequest() {
        request('http://localhost:3000/', function (err, res) {
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

  describe('task "build"', function () {
    before(function (done) {
      runSequence('build', function (err) {
        if (err) {
          throw err;
        }
        done();
      });
    });

    it('outputs files under "dist" directory', function () {
      assert.file([
        '../templates/dist/index.html',
        '../templates/dist/styles',
        '../templates/dist/scripts',
        '../templates/dist/images',
        '../templates/dist/fonts'
      ]);
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
        request('http://localhost:3000/', function (err, res) {
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
});
