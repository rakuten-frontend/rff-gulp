# JavaScriptライブラリを使用する

このフレームワークではパッケージ管理に[npm](https://www.npmjs.com/)を使っています。  
フロントエンド用のライブラリもnpmを使って簡単にインストールできます。
また、JSライブラリはBrowserifyによってコンパイルすることができます。

**Example:** jQueryをプロジェクトで使う

```
$ npm install jquery --save
```

**index.html**
```html
<html>
  <body>
    <script src="scripts/main.js"></script>
  </body>
</html>
```

**scripts/main.js**
```js
var $ = require('jquery');

$(function () {
  $('#message').text('Hello, jQuery!');
});
```

Browserifyは自動的にファイルの依存関係やグローバルオブジェクトを解決してコンパイルします。

- `<script src="path/to/jquery.js"></script>`をHTMLに追記する必要はありません。
- グローバルの`$`オブジェクトに気を使う必要はありません。

## 関連項目
- [jQueryプラグインを使用する](jquery-plugins.md)
- [JavaScriptモジュールを作成する](js-modules.md)
- [Browserifyを使わずにJavaScriptを読み込む](js-without-browserify.md)
