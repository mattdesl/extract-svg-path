var test = require('tape').test
var load = require('./load-contents')
var loadSVG = require('load-svg')

var read = require('../')
var extract = read.extract
var expected = require('fs').readFileSync(__dirname+'/expected.txt', 'utf8')

test('should parse XML string', function(t) {
    t.plan(3)

    load('svg/infinity.svg', function(err, contents) {
        t.equal(extract(contents), expected, 'extracts string contents')    
    })

    loadSVG('svg/infinity.svg', function(err, svg) {
        t.equal(extract(svg), expected, 'extracts SVG element contents')      
    })

    //will be fixed once a source transform is created
    t.throws(function() {
        read(__dirname + '/svg/infinity.svg')
    }, 'throws error')
})