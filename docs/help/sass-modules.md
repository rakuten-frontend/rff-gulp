# Create Sass partial modules

According to the [Sass official guide](http://sass-lang.com/guide#topic-4), Sass file prefixed with `_` is handled as a partial module.  
Partial Sass file will not be generated to CSS file.
Sass partials are used with the `@import` directive.

**Example:**

```
styles/main.scss
styles/_partial.scss
styles/components/core.scss
styles/components/_another-partial.scss
styles/components/_one-more-partial.scss
```

↓ Compile to

```
styles/main.css
styles/components/core.css
```

## See also
- [Use CSS/Sass libraries](css-libraries.md)
