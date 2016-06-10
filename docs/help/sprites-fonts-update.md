# Sprites/fonts can't be updated

CSS sprites generator and icon fonts generator runs only when PNG/SVG file is newly added or updated.  
This feature is usually good in terms of performance, but sometimes you might get unexpected output caused by inconsistent timestamp or other reasons.

You can easily regenerate sprites or fonts by **updating timestamp** with `touch` command.

```sh
$ touch app/images/_sprites/your-new-icon.png
# Regenerate sprites and css

$ touch app/fonts/_glyphs/your-new-icon.svg
# Regenerate fonts and css
```

---

**Other solution:**  
Not recommended, but you can force to generate sprites/fonts always by stripping gulp-newer.  
Remove `$.newer()` pipes and uninstall `gulp-newer` from your project.

```diff
gulp.task('sprites', function () {
  return gulp.src('app/images/_sprites/*.png')
-   .pipe($.newer('app/images/sprites.png'))
    .pipe($.spritesmith({
    ...
});

gulp.task('fonts', function () {
  return gulp.src('app/fonts/_glyphs/*.svg')
-   .pipe($.newer('app/styles/glyphs.css'))
    .pipe($.iconfontCss({
    ...
});
```

```
$ npm uninstall gulp-newer --save-dev
```
