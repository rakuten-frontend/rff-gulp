English / [日本語](../help-ja/disable-specific-revisioning.md)

# Disable asset revisioning to specific files

You can specify the target of revisioning.
Modify `gulp.src()` in the `filerev` task.

**Example 1:** Apply only CSS/JS files

```diff
gulp.task('filerev', function () {
- return gulp.src('dist/**/*.{css,js,png,jpg,gif,eot,svg,ttf,woff,woff2}')
+ return gulp.src('dist/**/*.{css,js}')
  ...
});
```

**Example 2:** Disable revisioning to images under `images/static` directory.

```diff
gulp.task('filerev', function () {
- return gulp.src('dist/**/*.{css,js,png,jpg,gif,eot,svg,ttf,woff,woff2}')
+ return gulp.src([
+   'dist/**/*.{css,js,png,jpg,gif,eot,svg,ttf,woff,woff2}',
+   '!dist/images/static/**'
+ ])
  ...
});
```

## See also
- [Disable asset revisioning](disable-revisioning.md)
