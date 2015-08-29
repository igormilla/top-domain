var url = require('url');

module.exports = function(str) {
  str = str.toLowerCase();

  var topLevelDomain,
    matched,
    domain = /[a-z0-9][a-z0-9\-]*[a-z0-9]\.[a-z\.]{2,6}$/i,
    parsedUrl = url.parse(str);

  if (parsedUrl.host !== null) {
    matched = parsedUrl.host.match(domain);
    topLevelDomain = matched ? matched[0] : host;
  } else {
    matched = parsedUrl.path.match(domain);
    topLevelDomain = matched ? matched[0] : "";
  }

  return topLevelDomain;

};
