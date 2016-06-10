# generator-rffとの比較

**rff-gulp**は、[generator-rff](https://github.com/rakuten-frontend/generator-rff)（Gruntベースのプロジェクト作成キット）の後継として開発されました。

## 概観
rff-gulpは開発者にとって使いやすいように設計されています。
より新しく、安定していて、速く、そしてシンプルです。

|                          | rff-gulp  | generator-rff         |
|--------------------------|:---------:|:---------------------:|
| **必要なもの**           | Node.js   | Node.js + Git + Bower |
| **ビルドシステム**       | gulp      | Grunt                 |
| **ビルドの実行速度**     | 速い      | 遅い                  |
| **ビルドの設定ファイル** | 304行     | 600行以上             |

## 機能
rff-gulpはgenerator-rffの標準プリセットとほぼ同等の機能を持っています。
それに加え、コンポーネントによってはより信頼性の高いモジュールに変更されています。

|                              | rff-gulp    | generator-rff (標準)    | generator-rff (フル)     |
|------------------------------|:-----------:|:-----------------------:|:------------------------:|
| **マークアップ**             | HTML        | HTML                    | HTML, Pug                |
| **スタイルシート**           | CSS, Sass   | CSS, Sass, Less, Stylus | CSS, Sass, Less, Stylus  |
| **スクリプト**               | JavaScript  | JavaScript              | JavaScript, CoffeeScript |
| **パッケージ管理**           | npm         | Bower                   | Bower                    |
| **モジュールバンドラ**       | Browserify  | wiredep + grunt-usemin  | wiredep + grunt-usemin   |
| **HTMLの検証**               | -           | -                       | The Nu Html Checker      |
| **CSSの検証**                | Stylelint   | CSS Lint                | CSS Lint                 |
| **JSの検証**                 | ESLint      | JSHint + JSCS           | JSHint + JSCS            |
| **ユニットテスト**           | -           | -                       | Mocha, Jasmine           |
| **開発サーバ**               | Browsersync | Browsersync             | Browsersync + SSI        |
| **Autoprefixer**             | ✓          | ✓                      | ✓                       |
| **CSSスプライト生成**        | ✓          | ✓                      | ✓                       |
| **アイコンフォント生成**     | ✓          | -                       | ✓                       |
| **画像の最適化**             | ✓          | ✓                      | ✓                       |
| **HTMLの最小化**             | ✓          | ✓                      | ✓                       |
| **CSSの最小化**              | ✓          | ✓                      | ✓                       |
| **JSの最小化**               | ✓          | ✓                      | ✓                       |
| **アセットのリビジョン付加** | ✓          | ✓                      | ✓                       |
| **Gitリポジトリへの配信**    | ✓          | -                       | ✓                       |
| **FTP配信**                  | -           | -                       | ✓                       |
