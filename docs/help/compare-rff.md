# Compare with generator-rff

**rff-gulp** is developed as a successor of [generator-rff](https://github.com/rakuten-frontend/generator-rff) which is Grunt-based project starter kit.

## Overview
rff-gulp is designed to be more developer-friendly.
This means rff-gulp is modern, stable, fast and simple.

|                         | rff-gulp  | generator-rff         |
|-------------------------|:---------:|:---------------------:|
| **Requirements**        | Node.js   | Node.js + Git + Bower |
| **Build system**        | gulp      | Grunt                 |
| **Build speed**         | faster    | slower                |
| **Build config script** | 304 lines | over 600 lines        |

## Features
rff-gulp has almost equivalent features to generator-rff default preset.
Additionally, some of components are replaced with more reliable modules.

|                           | rff-gulp    | generator-rff (default) | generator-rff (full)     |
|---------------------------|:-----------:|:-----------------------:|:------------------------:|
| **Markup**                | HTML        | HTML                    | HTML, Pug                |
| **Stylesheet**            | CSS, Sass   | CSS, Sass, Less, Stylus | CSS, Sass, Less, Stylus  |
| **Script**                | JavaScript  | JavaScript              | JavaScript, CoffeeScript |
| **Package manager**       | npm         | Bower                   | Bower                    |
| **Module bundler**        | Browserify  | wiredep + grunt-usemin  | wiredep + grunt-usemin   |
| **HTML checker**          | -           | -                       | The Nu Html Checker      |
| **CSS checker**           | Stylelint   | CSS Lint                | CSS Lint                 |
| **JS checker**            | ESLint      | JSHint + JSCS           | JSHint + JSCS            |
| **Unit testing**          | -           | -                       | Mocha, Jasmine           |
| **Dev server**            | Browsersync | Browsersync             | Browsersync + SSI        |
| **Autoprefixer**          | ✓          | ✓                      | ✓                       |
| **CSS sprites generator** | ✓          | ✓                      | ✓                       |
| **Icon fonts generator**  | ✓          | -                       | ✓                       |
| **Image optimization**    | ✓          | ✓                      | ✓                       |
| **HTML minification**     | ✓          | ✓                      | ✓                       |
| **CSS minification**      | ✓          | ✓                      | ✓                       |
| **JS minification**       | ✓          | ✓                      | ✓                       |
| **Asset revisioning**     | ✓          | ✓                      | ✓                       |
| **Git deployment**        | ✓          | -                       | ✓                       |
| **FTP deployment**        | -           | -                       | ✓                       |

## See also
- [Features](features.md)
