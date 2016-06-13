# jQueryプラグインを使用する

ほとんどのjQueryプラグインはグローバルの`jQuery`オブジェクトを参照しています。
しかし、Browserifyでjquery.jsを読み込むと、グローバルに`jQuery`オブジェクトが出力されません。
`jQuery is not defined`のような参照エラーが起きた場合は、明示的に`jQuery`オブジェクトを渡す必要があります。

Browserify上でグローバルオブジェクトを扱う方法はいくつかあります。

### global.* に追加する
一番簡単なやり方。
`global.jQuery = require('jquery')`と記述すると、グローバル（`window`オブジェクト）に`jQuery`が追加されます。

**例:**

```js
var $ = global.jQuery = require('jquery');
require('some-plugin');

$('.target').somePlugin();
```

### 他の方法
- [browserify-shim](https://github.com/thlorenz/browserify-shim) - CommonJS非互換のファイルをBrowserifyで扱えるようにする拡張。
- [jquery-bridget](https://github.com/desandro/jquery-bridget) - コンストラクタ外でjQueryプラグインを作るためのライブラリ。

## 関連項目
- [JavaScriptライブラリを使用する](js-libraries.md)
