[English](../help/images-performance.md) / 日本語

# "images"タスクが遅い

画像ファイルが大量にあると、画像の最適化に時間がかかります。  
[gulp-cache](https://github.com/jgable/gulp-cache)を使うとキャッシュによってタスクを高速化できます。
2回目以降のタスクの実行速度が大幅に向上します。

```
$ npm install gulp-cache --save-dev
```

`images`タスクにあるimageminを`$.cache()`で囲います。

```diff
gulp.task('images', ['sprites'], function () {
  return gulp.src([
    'app/images/**',
    '!app/images/_*{,/**}'
  ])
-   .pipe($.imagemin({
+   .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
-   }))
+   })))
    .pipe(gulp.dest('dist/images'));
});
```

**注意:**  
ごく稀に、ファイルキャッシュによって期待通りの出力ができないことがあります。  
その場合は、`$.cache.clearAll()`メソッドを使ってキャッシュを消去してください。
詳しくは**[Clearing the cache](https://github.com/jgable/gulp-cache#clearing-the-cache)**を参照してください。

