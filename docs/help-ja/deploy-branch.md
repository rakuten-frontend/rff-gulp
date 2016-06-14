# デプロイ用ブランチを作成する

"dist"ディレクトリに出力される本番用のファイルは、更新履歴が複雑になったりコンフリクトするのを避けるため、Gitではトラックしていません。  
もしビルドされたファイルをリポジトリにプッシュしたい場合は、別の専用ブランチで管理するとスマートです。

## デプロイコマンド
本番用ファイルだけを取り出し、ブランチを切り替え、コミットし、リモートリポジトリにプッシュする、デプロイ用タスクがrff-gulpには含まれています。  
以下のコマンドで全て自動的に実行されます。

```sh
$ npm run deploy
# "dist"のファイルが"gh-pages"ブランチにプッシュされる
```

デフォルトでは、デプロイ用ブランチは**"gh-pages"**です。
[GitHub Pages](https://pages.github.com/)の配信で使われている名前です。

## ブランチ名を変更する
もしブランチ名を変更したい場合は、`deploy`タスク内の`$.ghPages()`にオプションを追加します。

**Example:** "production"ブランチに出力する

```diff
gulp.task('deploy', ['default'], function () {
  return gulp.src('dist/**/*')
-   .pipe($.ghPages());
+   .pipe($.ghPages({branch: 'production'}));
});
```

この他にも[gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages)プラグインにはカスタマイズ用のオプションがたくさんあります。  

- 他のリポジトリにプッシュする
- コミットはするがプッシュはしない
- 配信時のコミットメッセージを変更する
- etc.

詳細は、[gulp-gh-pagesのドキュメント](https://github.com/shinnn/gulp-gh-pages#api)を参照してください。
