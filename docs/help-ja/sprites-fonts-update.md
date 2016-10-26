[English](../help/sprites-fonts-update.md) / 日本語

# CSSスプライトやフォントが更新されない

CSSスプライトやアイコンフォントのジェネレータは、PGN/SVGファイルが追加・更新されたときのみ実行されます。  
パフォーマンスの観点からこのように設定されていますが、タイムスタンプがおかしかったり、その他の理由によって期待通りにファイルが生成されないことがあるかもしれません。

`touch`コマンドで**タイムスタンプを更新**すれば、簡単にスプライトやフォントを再生成できます。

```sh
$ touch app/images/_sprites/your-new-icon.png
# Regenerate sprites and css

$ touch app/fonts/_glyphs/your-new-icon.svg
# Regenerate fonts and css
```

---

**他の方法:**  
推奨はしませんが、gulp-newerを外せば必ずスプライト／フォントを生成するようにできます。  
`$.newer()`パイプを削除し、`gulp-newer`をプロジェクトからアンインストールします。

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
