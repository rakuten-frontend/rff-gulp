# Getting started

## Install prerequisites
First, install Node.js and npm.
npm is bundled with Node.js.

- [Node.js website](https://nodejs.org)
- Or you can install Node.js using [nvm](https://github.com/creationix/nvm). (Advanced)

rff-gulp requires Node.js **v4.0.0 or later**.
```
$ node --version && npm --version
```

Then, install [Yeoman](http://yeoman.io/) which is a command line tool for generating projects.
```
$ npm install --global yo
```

## Install rff-gulp generator
[generator-rff-gulp](https://github.com/rakuten-frontend/generator-rff-gulp) is a Yeoman generator to create project using rff-gulp template.
```
$ npm install --global generator-rff-gulp
```

## Create your project
Make a directory for your project.
```
$ mkdir my-gulp-project && cd my-gulp-project
```

Run Yeoman generator to create a project based on rff-gulp.
```sh
$ yo rff-gulp
# This will generate files and install node_modules.
```

**Tip:**  
generator-rff-gulp automatically fetches the latest template on GitHub and create a project.  
If you want to download the template manually, get it from the Releases page.

- **[Latest release](https://github.com/rakuten-frontend/rff-gulp/releases/latest)**
- [All versions](https://github.com/rakuten-frontend/rff-gulp/releases)

## Start development
See the README.md in your generated project.
