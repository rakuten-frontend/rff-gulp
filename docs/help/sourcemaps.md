English / [日本語](../help-ja/sourcemaps.md)

# Output sourcemap for production files

Sourcemap is helpful to debug compiled or minified source code.  
By default, this framework outputs sourcemaps for development, but it doesn't for production.

If you want to debug production CSS/JavaScript, modify tasks to generate sourcemaps to "dist" folder.

## CSS
In the `styles` task, add `$.sourcemaps()` pipes.

```diff
gulp.task('styles', ['sprites', 'fonts'], function () {
  return gulp.src('app/styles/**/*.scss')
+   .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: browsers}),
      cssnano({
        safe: true,
        autoprefixer: false
      })
    ]))
+   .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'));
});
```

## JavaScript
In the `scripts` task, pass `{debug: true}` to browserify and add `$.sourcemaps()` pipes.

```diff
gulp.task('scripts', function () {
    ...
-   var bundleStream = browserify(file).bundle()
+   var bundleStream = browserify(file, {debug: true}).bundle()
      .on('error', function (error) {
        $.util.log($.util.colors.red('Browserify error:') + '\n' + error.message);
        this.emit('end');
      })
      .pipe(source(path.relative('app/scripts', file)))
      .pipe(buffer())
+     .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.uglify())
+     .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('dist/scripts'));
    ...
});
```
