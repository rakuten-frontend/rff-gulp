English / [日本語](../help-ja/deploy-branch.md)

# Create deployment branch

Production files created in the "dist" directory are not tracked by Git to prevent unnecessary histories/conflicts.  
These built files should be managed in another branch if you want to push them to repository.

## Deployment command
rff-gulp has a deployment task to pick out only production files, switch to another branch, create a commit, and push it to remote repository.  
Everything is automated by this single command.

```sh
$ npm run deploy
# "dist" files will be pushed to "gh-pages" branch.
```

By default, the deployment branch is named **"gh-pages"**, which is used for [GitHub Pages](https://pages.github.com/) deployment.

## Change the branch name
If you want to change the branch name, add option to `$.ghPages()` in the `deploy` task.

**Example:** Built files go to "production" branch

```diff
gulp.task('deploy', ['default'], function () {
  return gulp.src('dist/**/*')
-   .pipe($.ghPages());
+   .pipe($.ghPages({branch: 'production'}));
});
```

[gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages) plugin has more options to customize the task.  
For example:

- Push to another repository
- Just commit, without push
- Edit commit message for deployment
- etc.

See the [gulp-gh-pages document](https://github.com/shinnn/gulp-gh-pages#api) for details.
