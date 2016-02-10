# Include JavaScript without Browserify

We recommend to use Browserify for all JS files.  
Sometimes, however, you might want to include a JavaScript directly, without Browserify.

In that case, just put the script file out of the `app/scripts` directory, for example: `app/vendor/*.js`.

```
scripts/main.js
scripts/lib/module.js
vendor/old-fashioned-script.js
```

↓ Compile or copy to

```
scripts/main.js
vendor/old-fashioned-script.js
```

**index.html**
```html
<html>
  <body>
    <script src="scripts/main.js"></script>
    <script src="vendor/old-fashioned-script.js"></script>
  </body>
</html>
```
