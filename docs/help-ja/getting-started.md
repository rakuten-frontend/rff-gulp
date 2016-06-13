# スタートガイド

## 必要な環境を準備する
まず、Node.jsとnpmをインストールします。
npmは、Node.jsと一緒にインストールされます。

- [Node.js公式サイト](https://nodejs.org)
- または、[nvm](https://github.com/creationix/nvm)を使ってインストールできます（上級）

rff-gulpを使うにはNode.js **v4.0.0以降**が必要です。
```
$ node --version && npm --version
```

次に、プロジェクト生成のためのコマンドラインツール[Yeoman](http://yeoman.io/)をインストールします。
```
$ npm install --global yo
```

## rff-gulpジェネレータをインストールする
[generator-rff-gulp](https://github.com/rakuten-frontend/generator-rff-gulp)は、rff-gulpテンプレートを使ってプロジェクトを生成するYeomanジェネレータです。
```
$ npm install --global generator-rff-gulp
```

## プロジェクトを作成する
プロジェクト用のディレクトリを作ります。
```
$ mkdir my-gulp-project && cd my-gulp-project
```

Yeomanジェネレータを実行し、rff-gulpを使ったプロジェクトを作成します。
```sh
$ yo rff-gulp
# This will generate files and install node_modules.
```

**Tip:**  
generator-rff-gulpは自動的にGitHub上の最新版テンプレートを取得して、プロジェクトを作成します。  
もし手動でテンプレートだけをダウンロードしたい場合、リリースページから入手してください。

- **[最新リリース](https://github.com/rakuten-frontend/rff-gulp/releases/latest)**
- [全てのバージョン](https://github.com/rakuten-frontend/rff-gulp/releases)

## 開発を始める
生成したプロジェクトにあるREADME.mdを参照してください。
