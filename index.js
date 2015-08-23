var url = require('url');

module.exports = function (urlStr) {

  var host     = url.parse(urlStr).host
    , topLevel = host.match(/[a-z0-9][a-z0-9\-]*[a-z0-9]\.[a-z\.]{2,6}$/i);

  return topLevel ? topLevel[0] : host;
};
