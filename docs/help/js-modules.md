English / [日本語](../help-ja/js-modules.md)

# Create JavaScript modules

This framework uses [Browserify](http://browserify.org/) as module bundler.  

## CommonJS
Browserify can bundle JavaScript files based on CommonJS syntax: `require()` and `module.exports`.  
It's a great solution to modularize your JavaScript.

**index.html**
```html
<html>
  <body>
    <script src="scripts/main.js"></script>
  </body>
</html>
```

**scripts/main.js** - entry point
```js
var hello = require('./lib/hello');
console.log(hello);    // Hello, world!
```

**scripts/lib/hello.js** - module
```js
module.exports = 'Hello, world!';
```

## Entry points
Entry point will be compiled to an output JS file with the same name.  
By default, entry points should be placed in the `app/scripts` directory, and all JS files in subdirectories are handled as module.
Module will not be generated to JS file.

**Example:**

```
scripts/main.js
scripts/lib/module.js
scripts/helpers/another-module.js
scripts/another-entry-point.js
```

↓ Compile to

```
scripts/main.js
scripts/another-entry-point.js
```

### Change the rule for entry points
If you want to change the rule for entry points detection, modify `globby.sync()` target in the `scripts:dev` and `scripts` task.  
The following code makes a new rule using `_` prefix like Sass partials.

```diff
gulp.task('scripts:dev', function () {
  var stream = mergeStream();
- globby.sync('app/scripts/*.js').forEach(function (file) {
+ globby.sync([
+   'app/scripts/**/*.js',
+   '!**/_*.js'
+ ]).forEach(function (file) {
  ...
});

gulp.task('scripts', function () {
  var stream = mergeStream();
- globby.sync('app/scripts/*.js').forEach(function (file) {
+ globby.sync([
+   'app/scripts/**/*.js',
+   '!**/_*.js'
+ ]).forEach(function (file) {
  ...
});
```

**New rule:**

```
scripts/main.js
scripts/_module.js
scripts/app/another-entry-point.js
scripts/app/_another-module.js
```

↓ Compile to

```
scripts/main.js
scripts/app/another-entry-point.js
```

## See also
- [Use JavaScript libraries](js-libraries.md)
- [Include JavaScript without Browserify](js-without-browserify.md)
