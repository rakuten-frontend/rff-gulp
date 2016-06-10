# 本番ファイル用のソースマップを出力する

ソースマップはコンパイルや最小化されたソースコードをデバッグするのに役立ちます。  
デフォルトでは、このフレームワークは開発中のソースマップは出力しますが、本番用には出力しません。

本番用のCSS/JavaScriptをデバッグしたい場合は、"dist"フォルダにソースマップを生成するようタスクを編集します。

## CSS
`styles`タスクに、`$.sourcemaps()`パイプを追加します。

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
`scripts`タスクにて、`{debug: true}`オプションをbrowserifyに渡し、`$.sourcemaps()`パイプを追加します。

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
