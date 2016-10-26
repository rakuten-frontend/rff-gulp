# rff-gulp
> Boilerplate for gulp-based project.

[![GitHub Release][release-image]][release-url]
[![GitHub Downloads][downloads-image]][downloads-url]
[![Travis Status][travis-image]][travis-url]
[![AppVeyor Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![devDependency Status][david-dev-image]][david-dev-url]

## Features
- **Stylesheet**
  - [Sass](http://sass-lang.com/)
  - [stylelint](http://stylelint.io/)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
- **JavaScript**
  - [ESLint](http://eslint.org/)
  - [Browserify](http://browserify.org/)
- **Web performance**
  - [HTML](https://github.com/kangax/html-minifier)/[CSS](http://cssnano.co/)/[JS](http://lisperator.net/uglifyjs/) minification
  - [Image optimization](https://github.com/imagemin/imagemin)
  - [Static asset revisioning](https://github.com/sindresorhus/gulp-rev)
- **Automation**
  - [CSS sprites generator](https://github.com/twolfson/gulp.spritesmith)
  - [Icon fonts generator](https://github.com/nfroidure/gulp-iconfont)
  - [Deployment to Git repository](https://github.com/shinnn/gulp-gh-pages)
- **Development server**
  - [Browsersync](https://www.browsersync.io/)

## Getting started

#### Command line
We have a [Yeoman generator](https://github.com/rakuten-frontend/generator-rff-gulp) for creating a project with rff-gulp easily.  
First, `npm install -g yo generator-rff-gulp` and then:

```sh
$ yo rff-gulp
```

#### Manual download
- **[Latest release](https://github.com/rakuten-frontend/rff-gulp/releases/latest)**
- [All versions](https://github.com/rakuten-frontend/rff-gulp/releases)

## Documentation
rff-gulp help: [English](docs/README.md) / [日本語](docs/README-ja.md)

## License
Copyright (c) 2016 Rakuten, Inc.
Licensed under the [MIT License](LICENSE).

[release-image]: https://img.shields.io/github/release/rakuten-frontend/rff-gulp.svg
[release-url]: https://github.com/rakuten-frontend/rff-gulp/releases/latest
[downloads-image]: https://img.shields.io/github/downloads/rakuten-frontend/rff-gulp/total.svg
[downloads-url]: https://github.com/rakuten-frontend/rff-gulp/releases
[travis-image]: https://img.shields.io/travis/rakuten-frontend/rff-gulp.svg?label=unix
[travis-url]: https://travis-ci.org/rakuten-frontend/rff-gulp
[appveyor-image]: https://img.shields.io/appveyor/ci/htanjo/rff-gulp.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/htanjo/rff-gulp
[coveralls-image]: https://coveralls.io/repos/rakuten-frontend/rff-gulp/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/rakuten-frontend/rff-gulp
[david-dev-image]: https://david-dm.org/rakuten-frontend/rff-gulp/dev-status.svg?path=templates
[david-dev-url]: https://david-dm.org/rakuten-frontend/rff-gulp?path=templates&type=dev
