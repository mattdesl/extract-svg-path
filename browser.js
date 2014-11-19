function extract(contents, opt) {
    var svg = contents
    if (typeof contents === 'string') {
        var div = document.createElement('div')
        div.innerHTML = contents
        svg = div.querySelector('svg')
    }
    if (!svg) 
        return new Error('no svg specified for extraction')

    var elements = Array.prototype.slice.call(svg.querySelectorAll('path'))
    return elements.map(function (s) {
        return (s.getAttribute('d')||'').replace(/\s+/g, ' ')
    }).filter(Boolean).join(' ').trim()
}

module.exports = function(file, opt) {
    throw new Error('use extractify-svg-path to inline SVG contents into your bundle')
}

module.exports.extract = extract