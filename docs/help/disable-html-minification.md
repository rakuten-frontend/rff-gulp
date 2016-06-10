# Disable HTML minification

Remove `$.htmlmin()` pipe from the `html` task.

```diff
gulp.task('html', function () {
  return gulp.src('app/**/*.html')
-   .pipe($.htmlmin({
-     ...
-   }))
    .pipe(gulp.dest('dist'));
});
```

**Optional:**  
If you want to remove this feature permanently, uninstall `gulp-htmlmin` from your project.

```
$ npm uninstall gulp-htmlmin --save-dev
```
