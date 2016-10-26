[English](../help/styles-performance.md) / 日本語

# "styles"タスクが遅い

スタイルシートがあまりに大きいと、CSSの最小化に時間がかかります。
特に[postcss-discard-duplicates](https://github.com/ben-eb/postcss-discard-duplicates)プラグインがパフォーマンスの影響を受けやすいです。  
タスクの実行速度を改善するには、`discardDuplicates: false`を設定します。
ただし、その分圧縮率は下がります。

```diff
gulp.task('styles', ['sprites', 'fonts'], function () {
  return gulp.src('app/styles/**/*.scss')
    .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: browsers}),
      cssnano({
        safe: true,
-       autoprefixer: false
+       autoprefixer: false,
+       discardDuplicates: false
      })
    ]))
    .pipe(gulp.dest('dist/styles'));
});
```
