# extract-svg-path

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Extracts a string of subpaths from an svg file as a single path. Concats the `<path>` elements' data together to produce the output. This is mostly useful for SVG files of a single monotone shape or glyph (as opposed to, say, SVG font libraries or a complex SVG scene composed of several shapes). 

```npm install -g extract-svg-path```

```
extract-svg-path foo.svg > foo.txt
```

Now you can use the path alongside `parse-svg-path` and similar modules.

Use `-q` or `--quote` to escape the string for JSON:

```
extract-svg-path foo.svg --quote > foo.json
```

You can pipe with [module-exports](https://www.npmjs.org/package/module-exports) to produce CommonJS:

```
extract-svg-path foo.svg -q | module-exports > foo.js
```

Will produce:

```js
module.exports = "M50,1.42C23.213,1.42,1.........";
```

## API

[![NPM](https://nodei.co/npm/extract-svg-path.png)](https://nodei.co/npm/extract-svg-path/)

The API is intentionally dumbed down to make it easier for static analysis (i.e. bundler transforms).

```js
var contents = require('extract-svg-path')(__dirname + '/file.svg')
```

#### `extractSvgPath(file[, opt])`

Extracts the SVG contents of the given file path, using `fs.readFileSync` with utf8 by default. Any options will be passed along to [cheerio](https://github.com/cheeriojs/cheerio), but with `xmlMode` default to true. Additional options:

- `encoding` the file encoding, defaults to utf8

#### `extractSvgPath.extract(contents)`

Performs the cheerio extraction on a string.


## License

MIT, see [LICENSE.md](http://github.com/mattdesl/extract-svg-path/blob/master/LICENSE.md) for details.
