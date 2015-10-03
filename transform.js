var staticModule = require('static-module')
var path = require('path')
var through = require('through2')
var escape = require('jsesc')
var extract = require('./')

module.exports = function (file, opts) {
  if (/\.json$/.test(file)) return through()

  if (!opts) opts = {}
  var vars = opts.vars || {
    __filename: file,
    __dirname: path.dirname(file)
  }

  var sm = staticModule(
    { 'extract-svg-path': handler },
    { vars: vars }
  )
  return sm

  function handler (file) {
    var data = extract(file)
    return "'" + escape(data) + "'"
  }
}
