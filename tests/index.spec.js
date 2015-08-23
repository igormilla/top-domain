var assert = require("assert"),
  topDomain = require('../');

describe('top domain', function() {
  it('shoudl return top domain from url with simple top level domain', function() {
    assert.equal(topDomain('http://amazon.com/'), 'amazon.com');
  });

  it('should return top domain from url with complex top level doman (eg. .co.uk)', function() {
    assert.equal(topDomain('http://amazon.co.uk/'), 'amazon.co.uk');
  });

  it('should return top domain from url with subdomains', function() {
    assert.equal(topDomain('http://www.amazon.co.uk/'), 'amazon.co.uk');
  });
});
