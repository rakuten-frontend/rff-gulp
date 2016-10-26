English / [日本語](../help-ja/js-libraries.md)

# Use JavaScript libraries

This framework uses [npm](https://www.npmjs.com/) for package management.  
You can easily install frontend libraries using npm, and JS libraries can be bundled by Browserify.

**Example:** Use jQuery in the project

```
$ npm install jquery --save
```

**index.html**
```html
<html>
  <body>
    <script src="scripts/main.js"></script>
  </body>
</html>
```

**scripts/main.js**
```js
var $ = require('jquery');

$(function () {
  $('#message').text('Hello, jQuery!');
});
```

Browserify compiles JavaScript resolving file dependencies and global objects.

- You don't need to insert `<script src="path/to/jquery.js"></script>` to HTML.
- You don't need to take care of the global `$` object.

## See also
- [Use jQuery plugins](jquery-plugins.md)
- [Create JavaScript modules](js-modules.md)
- [Include JavaScript without Browserify](js-without-browserify.md)
