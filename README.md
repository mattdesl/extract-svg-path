# extract-svg-path

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Grabs all the `<path>` data from an SVG file, concatenating them into a single string.

This is mostly useful for simple shapes and silhouettes. It works in Node/Browser and provides a transform for inlining paths into a bundle.

## Install

```sh
npm install extract-svg-path [-g|--save]
```

## Example

```js
var parse = require('parse-svg-path')
var extract = require('extract-svg-path')

var path = extract(__dirname + '/infinity.svg')
var svg = parse(path)
console.log(svg)
//=> [ [ 'M', 25, 15 ], ... ]
```

## Usage

#### `extractSvgPath(file[, opt])`

Extracts the SVG `<path>` contents of the given file path, using `fs.readFileSync` with utf8 by default. Any options will be passed along to [cheerio](https://github.com/cheeriojs/cheerio), but with `xmlMode` default to true. Additional options:

- `encoding` the file encoding, defaults to utf8

#### `extractSvgPath.parse(contents)`

Extracts the paths from the string contents of an SVG file.

## Browser Usage

Without a transform, only the `parse` method is supported. This can accept either a string (i.e. from [xhr](https://www.npmjs.org/package/xhr) response) or an SVG node (i.e. from [load-svg](https://github.com/substack/load-svg)).

```js
var parse = require('parse-svg-path')
var extract = require('extract-svg-path').parse
var load = require('load-svg')

load('svg/infinity.svg', function(err, svg) {
  var paths = parse(extract(svg))
})
```

With browserify, you can use the transform to inline files into your bundle. For example:

```js
var parse = require('parse-svg-path')
var svg = require('extract-svg-path')(__dirname + '/shape.svg')
var path = parse(svg)
```

Then:

```sh
browserify index.js -t extract-svg-path/transform
```

## Changes

- `2.1` - renamed `fromString` to `parse` in a backwards-compatible manner
- `2.0` - uses `xml-parse-from-string`, removed CLI to reduce dependency bloat, renamed `extract` method to `fromString`, merged transform into this module
  - a CLI might be re-done later in a separate module
- `1.0` - includes a CLI, `extract` method

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/extract-svg-path/blob/master/LICENSE.md) for details.
