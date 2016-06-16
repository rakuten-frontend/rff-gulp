# Features

[Stylesheet](#stylesheet) |
[JavaScript](#javascript) |
[Web performance](#web-performance) |
[Automation](#automation) |
[Development server](#development-server)

## Stylesheet
### Sass
**[Sass](http://sass-lang.com/)** is a CSS extension lauguage for creating stylesheets more efficiently.  
Sass was originally written in Ruby, however you don't need to install Ruby because rff-gulp uses [LibSass](http://sass-lang.com/libsass) which is a portable engine for Sass.

- [Sass basics](http://sass-lang.com/guide)
- [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

### Stylelint
**[Stylelint](http://stylelint.io/)** is a modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.  
Stylelint supports "shareable config" and rff-gulp adopts **[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)** as the default rules.

- [Stylelint rules](http://stylelint.io/user-guide/rules/)

### Autoprefixer
**[Autoprefixer](https://github.com/postcss/autoprefixer)** parses CSS and adds vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).  
Now no need to worry about vendor prefixes: `-webkit-*`, `-moz-*` and `-ms-*`.

## JavaScript
### ESLint
**[ESLint](http://eslint.org/)** is a pluggable linting utility for JavaScript and JSX.  
ESLint also [supports shareable config](http://eslint.org/docs/developer-guide/shareable-configs) and rff-gulp uses rules based on **[eslint-config-xo-space](https://github.com/sindresorhus/eslint-config-xo-space)** by default.

- [ESLint rules](http://eslint.org/docs/rules/)

### Browserify
**[Browserify](http://browserify.org/)** lets you `require('modules')` in the browser by bundling up all of your dependencies.  
This enables you to modularize your scripts and also install libraries from [npm](https://www.npmjs.com/) smoothly.

## Web performance
### HTML/CSS/JS minification
HTML/CSS/JS files will be automatically minified and optimized for production by the build task.  
rff-gulp uses **[html-minifier](https://github.com/kangax/html-minifier)**, **[cssnano](http://cssnano.co/)** and **[UglifyJS](http://lisperator.net/uglifyjs/)** for the minifier.

- [Disable HTML minification](disable-html-minification.md)
- [Disable CSS/JS minification](disable-css-js-minification.md)

### Image optimization
Build taks minifies PNG, JPEG, GIF and SVG images using **[imagemin](https://github.com/imagemin/imagemin)**.  

### Static asset revisioning
Build task appends content hash to file names, like `main.css` -> `main-9429bd756b.css`.  
rff-gulp uses **[gulp-rev](https://github.com/sindresorhus/gulp-rev)** and **[gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace)** for this feature.

- [Disable asset revisioning](disable-revisioning.md)
- [Disable asset revisioning to specific files](disable-specific-revisioning.md)

## Automation
### CSS sprites generator
Images in "app/images/_sprites" will be converted to spritesheet and CSS.  
rff-gulp uses **[gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)** which is a wrapper of **[spritesmith](https://github.com/Ensighten/spritesmith)** utility.

### Icon fonts generator
SVG icons in "app/fonts/_glyphs" will be converted to web fonts and CSS.  
rff-gulp uses **[gulp-iconfont](https://github.com/nfroidure/gulp-iconfont)** and **[gulp-iconfont-css](https://github.com/backflip/gulp-iconfont-css)** for this feature.

### Deployment to Git repository
Built files can be uploaded to deployment branch by running a single command.  
rff-gulp uses **[gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages)** for this feature.

- [Create deployment branch](deploy-branch.md)

## Development server
### Browsersync
**[Browsersync](https://www.browsersync.io/)** is a web server which keeps multiple browsers & devices in sync during development.  
Browsersync has many awesome features for frontend development, e.g. live-reloading, interaction sync, network throttle simulation, etc.

- [Browsersync options](https://www.browsersync.io/docs/options)

## See also
- [Compare with generator-rff](compare-rff.md)
