var test = require('tape').test
var load = require('./load-contents')
var loadSVG = require('load-svg')
var path = require('path')

var read = require('../')
var extract = read.fromString
var expected = require('fs').readFileSync(path.join(__dirname, '/expected.txt'), 'utf8')

test('should parse XML string', function (t) {
  t.plan(3)

  load('svg/infinity.svg', function (err, contents) {
    if (err) return t.fail(err)
    t.equal(extract(contents), expected, 'extracts string contents')
  })

  loadSVG('svg/infinity.svg', function (err, svg) {
    if (err) return t.fail(err)
    t.equal(extract(svg), expected, 'extracts SVG element contents')
  })

  // will throw an error when no transform is added to bundle step
  t.throws(function () {
    read('/svg/infinity.svg')
  }, 'throws error')
})
