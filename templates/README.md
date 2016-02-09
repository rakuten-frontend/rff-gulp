# Gulp Boilerplate
> Boilerplate for gulp project.

## Features
- **Stylesheet**
  - [Sass](http://sass-lang.com/)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
- **JavaScript**
  - [ESLint](http://eslint.org/)
  - [Browserify](http://browserify.org/)
- **Web performance**
  - HTML/CSS/JS minification
  - Image optimization
  - Static asset revisioning
- **Automation**
  - CSS Sprites generator
  - Icon fonts generator
  - Deployment to Git repository
- **Development server**
  - [Browsersync](https://www.browsersync.io/)

## Getting started
Make sure to install [Node.js](https://nodejs.org/).

### Install dependencies
```sh
$ npm install
```

This installs both build system modules and dependent libraries for the project.

### Start development
```sh
$ npm start
```

This starts local development server and "watch" tasks.  
When you save a source code, it will be compiled and reload browser automatically.

## Structure
```
gulp-boilerplate/
├── app/                 : Application files
│   ├── styles/          : Stylesheets
│   ├── scripts/         : Scripts
│   ├── images/          : Images
│   │   └── _sprites/    : Base images for spritesheet
│   ├── fonts/           : Web fonts
│   │   └── _glyphs/     : Base SVG files for icon font
│   └── index.html       : Index page
├── dist/                : Production files (Not tracked in Git)
├── tasks/               : Additional gulp tasks
├── gulpfile.js          : Base gulp config
└── package.json         : Package information including dependencies
```

## Build tasks
- **`npm start`**  
  Start local development server and watch files to compile/lint.  
  [Cntl + C] to exit.

- **`npm test`**  
  Run linter.

- **`npm run build`**  
  Run linter and build app for production.

- **`npm run serve:dist`**  
  Start server with production files.

- **`npm run deploy`**  
  Deploy production files to `gh-pages` branch.

## License
Copyright (c) 2015-2016 Hiroyuki Tanjo.
Licensed under the [MIT License](LICENSE).
