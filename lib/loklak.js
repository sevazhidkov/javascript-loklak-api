var request = require('request-json');

var LoklakClient = module.exports = function () {
  this.httpClient = request.createClient('http://loklak.org/api/');
}

LoklakClient.prototype.status = function (cb) {
  this.httpClient.get('status.json', function (err, res, body) {
    if (err) {
      cb({});
    } else {
      cb(body);
    }
  })
}

LoklakClient.prototype.hello = function (cb) {
  this.httpClient.get('hello.json', function (err, res, body) {
    if (err) {
      cb({});
    } else {
      cb(body);
    }
  })
}
