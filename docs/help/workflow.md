English / [日本語](../help-ja/workflow.md)

# Workflow

All modules for both build system and frontend development are managed by [npm](https://www.npmjs.com/).  
If you cloned an existing project from Git repository, run `npm install` before starting development.

## 1. Start development server
First, start localhost server for your development.

```
$ npm start
```

This command does following tasks:

- Start [Browsersync](https://www.browsersync.io/) server and open `http://localhost:3000` on your web browser.
- Validate and compile source code when you save a file.
- Refresh browser automatically when you update the page.

Your can see the compiler/server/linter log on your terminal.
If you want to quit this process, press <kbd>Cntl</kbd> + <kbd>C</kbd>.

## 2. Develop web application
Develop your web application by editing files in **"app"** directory.

**Tips:**

- [Create Sass partial modules](sass-modules.md)
- [Create JavaScript modules](js-modules.md)
- [Use CSS/Sass libraries](css-libraries.md)
- [Use JavaScript libraries](js-libraries.md)
- [Use jQuery plugins](jquery-plugins.md)
- [Include JavaScript without Browserify](js-without-browserify.md)

## 3. Build project
When you finish editing app, you should build your project before git-commit.

```
$ npm run build
```

This command does:

- Test your source code at first.
- Compile/optimize files and output artifacts into **"dist"** directory.

**Note:** Usage of directories

- **"app"** - Files for development. This directory contains source code and original assets.
- **"dist"** - Files for production. This directory is not tracked in the Git main branch. Do not edit files directly.

## 4. Preview built contents
Check the built contents.
Start localhost server using "dist" directory.

```
$ npm run serve:dist
```

Looks good?
If so, create a git-commit and push it to remote repository.

## 5. Deploy built files
Upload built files to deployment branch.

```
$ npm run deploy
```

By default, built files will be pushed to "gh-pages" branch of your remote repository.  
See [Create deployment branch](deploy-branch.md) for more details.
