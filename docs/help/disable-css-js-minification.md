# Disable CSS/JS minification

**Note:**  
We do **not recommend** disabling CSS/JS minification in terms of the web performance.  
If you want to debug the production code, use sourcemap instead.

## CSS
Remove `$.minifyCss()` pipe from the `styles` task.

```diff
gulp.task('styles', ['sprites', 'fonts'], function () {
  return gulp.src('app/styles/**/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: browsers}))
-   .pipe($.minifyCss({sourceMap: false}))
    .pipe(gulp.dest('dist/styles'));
});
```

**Optional:**  
If you want to remove this feature permanently, uninstall `gulp-minify-css` from your project.

```sh
$ npm uninstall gulp-minify-css --save-dev
```

## JavaScript
Remove `$.uglify()` pipe from the `scripts` task.

```diff
gulp.task('scripts', function () {
    ...
    var bundleStream = browserify(file).bundle()
      .on('error', function (error) {
        $.util.log($.util.colors.red('Browserify error:') + '\n' + error.message);
        this.emit('end');
      })
      .pipe(source(path.relative('app/scripts', file)))
      .pipe(buffer())
-     .pipe($.uglify())
      .pipe(gulp.dest('dist/scripts'));
    ...
});
```

**Optional:**  
If you want to remove this feature permanently, uninstall `gulp-uglify` from your project.

```sh
$ npm uninstall gulp-uglify --save-dev
```
