# Task "images" is too slow

When you have many images, image optimization task would be slow.  
[gulp-cache](https://github.com/jgable/gulp-cache) can accelerate the task using temp file caching.
The task will be much faster from the second time.

```
$ npm install gulp-cache --save-dev
```

Wrap imagemin with `$.cache()` in the `images` task.

```diff
gulp.task('images', ['sprites'], function () {
  return gulp.src([
    'app/images/**',
    '!app/images/_*{,/**}'
  ])
-   .pipe($.imagemin({
+   .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
-   }))
+   })))
    .pipe(gulp.dest('dist/images'));
});
```

**Note:**  
File cache causes unexpected output in rare cases.
In that case, you should clear the cache by `$.cache.clearAll()` method.
See: **[Clearing the cache](https://github.com/jgable/gulp-cache#clearing-the-cache)**.
