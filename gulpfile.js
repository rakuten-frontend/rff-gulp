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
var github = new GitHubApi();

gulp.task('clean', del.bind(null, 'dist'));

gulp.task('build', ['clean'], function () {
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

gulp.task('release', ['build'], function () {
  var repo = hostedGitInfo.fromUrl(pkg.repository.url);
  github.authenticate(config.auth);
  return pify(github.repos.createRelease)({
      user: repo.user,
      repo: repo.project,
      tag_name: 'v' + pkg.version,
      body: 'Release v' + pkg.version
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
        name: pkg.name + '-v' + pkg.version + '.zip',
        filePath: 'dist/' + pkg.name + '.zip'
      })
    })
    .then(function (res) {
      $.util.log($.util.colors.green('Asset "' + res.name + '" uploaded'));
    });
});

gulp.task('default', ['build']);
