[English](../help/js-without-browserify.md) / 日本語

# Browserifyを使わずにJavaScriptを読み込む

Browserifyを全てのJSファイルに適用することを推奨します。  
ただ、どうしてもBrowserifyを使わずに直接JavaScriptを読み込みたいケースもあるかもしれません。

その場合は、`app/scripts`ディレクトリの外にスクリプトファイルを設置してください。（例: `app/vendor/*.js`）

```
scripts/main.js
scripts/lib/module.js
vendor/old-fashioned-script.js
```

↓ コンパイル・コピー後

```
scripts/main.js
vendor/old-fashioned-script.js
```

**index.html**
```html
<html>
  <body>
    <script src="scripts/main.js"></script>
    <script src="vendor/old-fashioned-script.js"></script>
  </body>
</html>
```
