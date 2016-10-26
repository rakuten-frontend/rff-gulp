English / [日本語](../help-ja/css-libraries.md)

# Use CSS/Sass libraries

This framework uses [npm](https://www.npmjs.com/) for package management.
You can easily install frontend libraries using npm.

**Example:** Use Bootstrap in the project

```
$ npm install bootstrap --save
```

**styles/main.scss**
```scss
@import "node_modules/bootstrap/dist/css/bootstrap";
```

- Don't include `.css` extension for `@import`. ( `path/to/library.css` -> `path/to/library` )

**Note:**  
If you need extra assets of the library, e.g. fonts, images, make sure to copy these files to "dist" and ".tmp" directory.

**gulpfile.js**
```diff
+ gulp.task('glyphicons', function () {
+   return gulp.src('node_modules/bootstrap/dist/fonts/*')
+     .pipe(gulp.dest('.tmp/fonts'))
+     .pipe(gulp.dest('dist/fonts'));
+ });
  ...
  gulp.task('pre:serve', function (callback) {
-   runSequence('clean:serve', ['styles:dev', 'scripts:dev'], callback);
+   runSequence('clean:serve', ['styles:dev', 'scripts:dev', 'glyphicons'], callback);
  });
  ...
  gulp.task('build', function (callback) {
-   runSequence('clean:build', ['html', 'styles', 'scripts', 'images', 'fonts', 'extras'], 'rev', callback);
+   runSequence('clean:build', ['html', 'styles', 'scripts', 'images', 'fonts', 'extras', 'glyphicons'], 'rev', callback);
  });
```

## See also
- [Create Sass partial modules](sass-modules.md)
