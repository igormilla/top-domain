var assert = require("assert"),
  topDomain = require('../');

describe('top domain', function() {
  it('shoudl return top domain from url with simple top level domain', function() {
    assert.equal(topDomain('http://amazon.com/'), 'amazon.com');
  });

  it('should return top domain from url with complex top level doman (eg. .co.uk)', function() {
    assert.equal(topDomain('https://amazon.co.uk/'), 'amazon.co.uk');
  });

  it('should return top domain from url with subdomains and parameters', function() {
    assert.equal(topDomain(
      'http://www.amazon.co.uk/Pickle-Parade-1-Piece-Confused-Squirrel/dp/B00H9E7F44/'
    ), 'amazon.co.uk');
  });
});
