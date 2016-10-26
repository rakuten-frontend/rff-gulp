[English](../help/disable-specific-revisioning.md) / 日本語

# 特定のファイルだけリビジョン付加を無効にする

リビジョン付加の対象を指定することができます。
`filerev`タスク内の`gulp.src()`を編集します。

**例1:** CSS/JSファイルだけを対象にする

```diff
gulp.task('filerev', function () {
- return gulp.src('dist/**/*.{css,js,png,jpg,gif,eot,svg,ttf,woff,woff2}')
+ return gulp.src('dist/**/*.{css,js}')
  ...
});
```

**例2:** `images/static`ディレクトリ配下の画像ファイルにはリビジョン付加しないようにする

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

## 関連項目
- [アセットへのリビジョン付加を無効にする](disable-revisioning.md)
