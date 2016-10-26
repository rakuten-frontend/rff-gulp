English / [日本語](../help-ja/jquery-plugins.md)

# Use jQuery plugins

Most jQuery plugins refer `jQuery` object in the global.
However, jquery.js doesn't export global `jQuery` object when you import it using Browserify.
If you get a reference error like `jQuery is not defined`, you have to pass the `jQuery` object expressly.

There are several ways to handle global objects on Browserify.

### Append to global.*
Easiest solution.
Write `global.jQuery = require('jquery')` to append `jQuery` on global, mostly `window` object.

**Example:**

```js
var $ = global.jQuery = require('jquery');
require('some-plugin');

$('.target').somePlugin();
```

### Other solutions
- [browserify-shim](https://github.com/thlorenz/browserify-shim) - Browserify extension which makes CommonJS incompatible files browserifyable.
- [jquery-bridget](https://github.com/desandro/jquery-bridget) - Bridget makes a jQuery plugin out of a constructor.

## See also
- [Use JavaScript libraries](js-libraries.md)
