[English](../help/disable-css-js-minification.md) / 日本語

# CSS/JSの最小化を無効にする

**注意:**  
Webパフォーマンスの観点から、CSS/JSの最小化を無効にするのは**推奨しません**。  
本番のコードをデバッグしたいだけの場合は、[ソースマップを使う](sourcemaps.md)ようにしてください。

## CSS
`styles`タスクから`cssnano()`を削除します。

```diff
gulp.task('styles', ['sprites', 'fonts'], function () {
  return gulp.src('app/styles/**/*.scss')
    .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
    .pipe($.postcss([
-     autoprefixer({browsers: browsers}),
+     autoprefixer({browsers: browsers})
-     cssnano({
-       safe: true,
-       autoprefixer: false
-     })
    ]))
    .pipe(gulp.dest('dist/styles'));
});
```

**オプション:**  
この機能を完全に削除したい場合は、`cssnano`をプロジェクトからアンインストールします。

```diff
- var cssnano = require('cssnano');
```

```
$ npm uninstall cssnano --save-dev
```

## JavaScript
`scripts`タスクから`$.uglify()`パイプを削除します。

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

**オプション:**  
この機能を完全に削除したい場合は、`gulp-uglify`をプロジェクトからアンインストールします。

```
$ npm uninstall gulp-uglify --save-dev
```

## 関連項目
- [本番ファイル用のソースマップを出力する](sourcemaps.md)
