# アセットへのリビジョン付加を無効にする

`build`タスクから`rev`を削除します。

```diff
gulp.task('build', function (callback) {
- runSequence('clean:dist', ['html', 'styles', 'scripts', 'images', 'extras'], 'rev', callback);
+ runSequence('clean:dist', ['html', 'styles', 'scripts', 'images', 'extras'], callback);
});
```

**オプション:**  
この機能を完全に削除したい場合は、`rev`と`filerev`タスクを削除し、`gulp-rev`と`gulp-rev-replace`をプロジェクトからアンインストールします。

```diff
- gulp.task('filerev', function () {
-   ...
- });

- gulp.task('rev', ['filerev'], function () {
-   ...
- });
```

```
$ npm uninstall gulp-rev gulp-rev-replace --save-dev
```

## 関連項目
- [特定のファイルだけリビジョン付加を無効にする](disable-specific-revisioning.md)
