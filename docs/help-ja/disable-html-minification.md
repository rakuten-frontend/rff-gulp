[English](../help/disable-html-minification.md) / 日本語

# HTMLの最小化を無効にする

`html`タスクから`$.htmlmin()`パイプを削除します。

```diff
gulp.task('html', function () {
  return gulp.src('app/**/*.html')
-   .pipe($.htmlmin({
-     ...
-   }))
    .pipe(gulp.dest('dist'));
});
```

**オプション:**  
この機能を完全に削除したい場合は、`gulp-htmlmin`をプロジェクトからアンインストールします。

```
$ npm uninstall gulp-htmlmin --save-dev
```
