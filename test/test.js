var test = require('tape').test
var read = require('../')
var extract = read.fromString
var fs = require('fs')
var path = require('path')
var expected = fs.readFileSync(path.join(__dirname, '/expected.txt'), 'utf8')

test('should parse XML string', function (t) {
  t.equal(read(path.join(__dirname, '/svg/infinity.svg')), expected, 'reads file inline and sync')

  var file = fs.readFileSync(path.join(__dirname, '/svg/infinity.svg'), 'utf8')
  t.equal(extract(file), expected, 'extracts a full path from XML string')
  t.end()
})
