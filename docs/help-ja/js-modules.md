# JavaScriptモジュールを作成する

このフレームワークでは[Browserify](http://browserify.org/)をモジュールバンドラとして使っています。  

## CommonJS
BrowserifyはCommonJSの記法、`require()`と`module.exports`に則ってJavaScriptファイルを統合します。  
JavaScriptの実装をモジュール化するのに適した手法です。

**index.html**
```html
<html>
  <body>
    <script src="scripts/main.js"></script>
  </body>
</html>
```

**scripts/main.js** - エントリポイント
```js
var hello = require('./lib/hello');
console.log(hello);    // Hello, world!
```

**scripts/lib/hello.js** - モジュール
```js
module.exports = 'Hello, world!';
```

## エントリポイント
エントリポイントは、コンパイルされて最終的なJSとして出力されます。  
デフォルトの状態では、エントリポイント用のJSファイルは`app/scripts`ディレクトリ直下に、下層フォルダ内のJSファイルは全てモジュールとして扱われます。
モジュールは単体ではJSファイルに変換されません。

**例:**

```
scripts/main.js
scripts/lib/module.js
scripts/helpers/another-module.js
scripts/another-entry-point.js
```

↓ コンパイル後

```
scripts/main.js
scripts/another-entry-point.js
```

### エントリポイントのルールを変更する
エントリポイント判定のルールを変更したい場合は、`scripts:dev`と`scripts`タスク内にある`globby.sync()`のターゲットを編集します。  
下記のコードでは、Sassパーシャルのような`_`プリフィックスによる判定ルールへと変更しています。

```diff
gulp.task('scripts:dev', function () {
  var stream = mergeStream();
- globby.sync('app/scripts/*.js').forEach(function (file) {
+ globby.sync([
+   'app/scripts/**/*.js',
+   '!**/_*.js'
+ ]).forEach(function (file) {
  ...
});

gulp.task('scripts', function () {
  var stream = mergeStream();
- globby.sync('app/scripts/*.js').forEach(function (file) {
+ globby.sync([
+   'app/scripts/**/*.js',
+   '!**/_*.js'
+ ]).forEach(function (file) {
  ...
});
```

**新しいルール:**

```
scripts/main.js
scripts/_module.js
scripts/app/another-entry-point.js
scripts/app/_another-module.js
```

↓ コンパイル後

```
scripts/main.js
scripts/app/another-entry-point.js
```

## 関連項目
- [JavaScriptライブラリを使用する](js-libraries.md)
- [Browserifyを使わずにJavaScriptを読み込む](js-without-browserify.md)
