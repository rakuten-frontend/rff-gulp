# 機能一覧

[スタイルシート](#スタイルシート) ｜
[JavaScript](#javascript) ｜
[Webパフォーマンス](#webパフォーマンス) ｜
[自動化](#自動化) ｜
[開発サーバ](#開発サーバ)

## スタイルシート
### Sass
**[Sass](http://sass-lang.com/)**はCSSの拡張言語で、効率的にスタイルシートを作成できます。  
もともとSassはRubyで書かれていましたが、rff-gulpではSassのポータブル版エンジン[LibSass](http://sass-lang.com/libsass)を使っているため、Rubyをインストールする必要はありません。

- [Sassの基礎](http://sass-lang.com/guide)
- [Sassドキュメント](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

### Stylelint
**[Stylelint](http://stylelint.io/)**は、記述の一貫性を保ちスタイルのエラーを防ぐための、モダンなCSS用リントです。  
Stylelintにはシェアラブル・コンフィグという機能があり、rff-gulpでは**[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)**をデフォルトのルールとして採用しています。

- [Stylelintのルール一覧](http://stylelint.io/user-guide/rules/)

### Autoprefixer
**[Autoprefixer](https://github.com/postcss/autoprefixer)**はCSSを解析し、[Can I Use](http://caniuse.com/)のデータに基づいてベンダープリフィックスを自動的に付加します。  
`-webkit-*`, `-moz-*`, `-ms-*`といった記述をコーディング時に意識する必要がなくなります。

## JavaScript
### ESLint
**[ESLint](http://eslint.org/)**はJavaScriptとJSX用のカスタマイズ性の高いリントです。  
ESLintも[シェアラブル・コンフィグ](http://eslint.org/docs/developer-guide/shareable-configs)に対応しており、rff-gulpでは**[eslint-config-xo-space](https://github.com/sindresorhus/eslint-config-xo-space)**をベースにしたルールを使っています。

- [ESLintのルール一覧](http://eslint.org/docs/rules/)

### Browserify
**[Browserify](http://browserify.org/)**は、`require('modules')`記法による依存解決をブラウザ用のスクリプトでも使えるようにするツールです。  
スクリプトをモジュール化したり、[npm](https://www.npmjs.com/)で提供されたライブラリを簡単に組み込むことができます。

## Webパフォーマンス
### HTML/CSS/JSの最小化
HTML/CSS/JSファイルは、ビルドタスクによって自動的に最小化・最適化されます。  
rff-gulpでは最小化のエンジンとして**[html-minifier](https://github.com/kangax/html-minifier)**、**[cssnano](http://cssnano.co/)**、**[UglifyJS](http://lisperator.net/uglifyjs/)**を使っています。

- [HTMLの最小化を無効にする](disable-html-minification.md)
- [CSS/JSの最小化を無効にする](disable-css-js-minification.md)

### 画像の最適化
ビルド時にPNG、JPEG、GIF、SVG画像は**[imagemin](https://github.com/imagemin/imagemin)**を使って最適化されます。

### 静的アセットへのリビジョン付加
ビルドすると、アセットのファイル名には内容に基づいたハッシュが付加されます。例: `main.css`→`main-9429bd756b.css`  
rff-gulpでは**[gulp-rev](https://github.com/sindresorhus/gulp-rev)**と**[gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace)**を使ってこの機能を実装しています。

- [アセットへのリビジョン付加を無効にする](disable-revisioning.md)
- [特定のファイルだけリビジョン付加を無効にする](disable-specific-revisioning.md)

## 自動化
### CSSスプライトの生成
"app/images/_sprites"フォルダ内の画像は自動的にCSSスプライトへと変換されます。  
スプライトの生成には**[spritesmith](https://github.com/Ensighten/spritesmith)**のラッパーである**[gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)**を使っています。

### アイコンフォントの生成
"app/fonts/_glyphs"フォルダ内のSVGアイコンは自動的にWebフォントとCSSに変換されます。  
アイコンフォントの生成には、**[gulp-iconfont](https://github.com/nfroidure/gulp-iconfont)**と**[gulp-iconfont-css](https://github.com/backflip/gulp-iconfont-css)**を使っています。

### Gitリポジトリへのデプロイ
ビルドされたファイルは、コマンド1つでデプロイ用ブランチに転送することができます。  
**[gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages)**を使って実装しています。

- [デプロイ用ブランチを作成する](deploy-branch.md)

## 開発サーバ
### Browsersync
**[Browsersync](https://www.browsersync.io/)**は、複数のブラウザ・デバイスを同期して表示させることができる開発用のWebサーバです。  
Browsersyncには他にも、ライブリロード、入力や操作内容の同期、ネットワーク速度のシミュレーションなど、便利な機能がたくさん含まれています。

- [Browsersyncのオプション一覧](https://www.browsersync.io/docs/options)

## 関連項目
- [generator-rffとの比較](compare-rff.md)
