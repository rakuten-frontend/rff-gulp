# [Project name]

## Getting started
Make sure to install [Node.js](https://nodejs.org/) (and npm) beforehand.

### Install dependencies
```sh
$ npm install
```

This command sets up the build system and downloads libraries used in this project.

### Start development
```sh
$ npm start
```

This starts local development server and begins file watching.  
When you save a source code, it will be compiled and reload browser automatically.

## Structure
```
[project]/
├── app/                 : Application source files
│   ├── styles/          : Stylesheets
│   ├── scripts/         : JavaScripts
│   ├── images/          : Images
│   │   └── _sprites/    : Base images for spritesheet
│   ├── fonts/           : Web fonts
│   │   └── _glyphs/     : Base SVG files for icon font
│   └── index.html       : Index page
├── dist/                : Production files (Gitignored)
├── gulpfile.js          : Build config
└── package.json         : Package information
```

## Build tasks
- **`npm start`**  
  Start local development server and watch files to compile/lint.  
  [Cntl + C] to exit.

- **`npm test`**  
  Run linters.

- **`npm run build`**  
  Run linters and build app for production.

- **`npm run serve:dist`**  
  Start server with production files.

- **`npm run deploy`**  
  Deploy production files to `gh-pages` branch.

- **`npm run gulp <task>`**  
  Run individual gulp task.

## Help
See [rff-gulp documents](https://github.com/rakuten-frontend/rff-gulp/tree/master/docs).  
This project is created using [rff-gulp](https://github.com/rakuten-frontend/rff-gulp) v<%= pkg.version %>.
