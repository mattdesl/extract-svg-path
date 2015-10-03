var xhr = require('xhr')

module.exports = function (opts, cb) {
  if (typeof opts === 'string') opts = { uri: opts }

  xhr(opts, function (err, res, body) {
    if (err) return cb(err)
    if (!/^2/.test(res.statusCode)) {
      return cb(new Error('http status code: ' + res.statusCode))
    }
    cb(null, body)
  })
}
