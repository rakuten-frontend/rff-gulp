# CSS/Sassライブラリを使用する

このフレームワークではパッケージ管理に[npm](https://www.npmjs.com/)を使っています。
フロントエンド用のライブラリもnpmを使って簡単にインストールできます。

**例:** Bootstrapをプロジェクトで使う

```
$ npm install bootstrap --save
```

**styles/main.scss**
```scss
@import "node_modules/bootstrap/dist/css/bootstrap";
```

- `@import`には`.css`拡張子を含めないようにします。（`path/to/library.css` → `path/to/library`）

**注意:**  
ライブラリに含まれるフォントや画像などのアセットが必要な場合は、"dist"と".tmp"ディレクトリにコピーしてください。

**gulpfile.js**
```diff
+ gulp.task('glyphicons', function () {
+   return gulp.src('node_modules/bootstrap/dist/fonts/*')
+     .pipe(gulp.dest('.tmp/fonts'))
+     .pipe(gulp.dest('dist/fonts'));
+ });
  ...
  gulp.task('pre:serve', function (callback) {
-   runSequence('clean:serve', ['styles:dev', 'scripts:dev'], callback);
+   runSequence('clean:serve', ['styles:dev', 'scripts:dev', 'glyphicons'], callback);
  });
  ...
  gulp.task('build', function (callback) {
-   runSequence('clean:build', ['html', 'styles', 'scripts', 'images', 'fonts', 'extras'], 'rev', callback);
+   runSequence('clean:build', ['html', 'styles', 'scripts', 'images', 'fonts', 'extras', 'glyphicons'], 'rev', callback);
  });
```

## 関連項目
- [Sassパーシャルモジュールを作成する](sass-modules.md)
