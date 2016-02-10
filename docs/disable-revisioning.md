# Disable asset revisioning

Remove `rev` from the `build` task.

```diff
gulp.task('build', function (callback) {
- runSequence('clean:dist', ['html', 'styles', 'scripts', 'images', 'extras'], 'rev', callback);
+ runSequence('clean:dist', ['html', 'styles', 'scripts', 'images', 'extras'], callback);
});
```

**Optional:**  
If you want to remove this feature permanently, remove `rev` and `filerev` task, and then uninstall `gulp-rev` and `gulp-rev-replace` from your project.

```diff
- gulp.task('filerev', function () {
-   ...
- });

- gulp.task('rev', ['filerev'], function () {
-   ...
- });
```

```sh
$ npm uninstall gul-rev gulp-rev-replace --save-dev
```

## See also
- [Disable asset revisioning to specific files](disable-specific-revisioning.md)
