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

LoklakClient.prototype.peers = function (cb) {
  this.httpClient.get('peers.json', function (err, res, body) {
    if (err) {
      cb({});
    } else {
      cb(body);
    }
  })
}

LoklakClient.prototype.geocode = function (places, cb) {
  this.httpClient.get(
    'geocode.json?places=' + places.toString(),
    function (err, res, body) {
      if (err) {
        cb({});
      } else {
        cb(body);
      }
    }
  )
}

LoklakClient.prototype.user = function (params, cb) {
  if (params.name == undefined) {
    cb({});
    return;
  }
  url = 'user.json?name=' + params.name
  if (params.followers != undefined) {
    url += '&folllowers=' + params.folllowers;
  }
  if (params.following != undefined) {
    url += '&folllowing=' + params.folllowing;
  }
  this.httpClient.get(url, function (err, res, body) {
    if (err) {
      cb({});
    } else {
      cb(body);
    }
  })
}

LoklakClient.prototype.search = function (params, cb) {
  if (params.q == undefined) {
    cb({});
    return;
  }
  query = params.q
  if (params.since != undefined) {
    query += ' since:' + params.since;
  }
  if (params.until != undefined) {
    query += ' until:' + params.until;
  }
  if (params.fromUser != undefined) {
    query += ' from:' + params.fromUser;
  }
  this.httpClient.get('search.json?q=' + query, function (err, res, body) {
    if (err) {
      cb({});
    } else {
      cb(body);
    }
  })
}
