var cheerio = require('cheerio')
var fs = require('fs')
var assign = require('object-assign')

function extract(contents, opt) {
    opt = opt||{}
    var $ = cheerio.load(contents, assign({ xmlMode: true }, opt))

    var fullpath = ''
    $('path').each(function() {
        var d = $(this).attr('d') 
        fullpath += d.replace(/\s+/g, ' ')+' '
    })
    return fullpath.trim()
}

module.exports = function(file, opt) {
    opt = opt||{}
    if (!opt.encoding)
        opt.encoding = 'utf8'
    var contents = fs.readFileSync(file, opt.encoding)
    return extract(contents, opt)
}

module.exports.parse = extract

//deprecated
module.exports.fromString = extract