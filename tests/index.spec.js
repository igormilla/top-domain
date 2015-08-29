var assert = require("assert"),
  topDomain = require('../');

describe('top domain', function() {
  it('shoudl return top domain from url with simple top level domain', function() {
    assert.equal(topDomain('http://example.com/'), 'example.com');
  });

  it('should return top domain from url with complex top level doman (eg. .co.uk)', function() {
    assert.equal(topDomain('https://example.co.uk/'), 'example.co.uk');
  });

  it('should return top domain from url with subdomains and parameters', function() {
    assert.equal(topDomain(
      'http://www.example.co.uk/parameter1/parameter2/'
    ), 'example.co.uk');
  });

  it('should return top domain from url without protocol', function() {
    assert.equal(topDomain(
      'subdomain.example.com'
    ), 'example.com');
  });

  it('should return empty string in a case of not a valid url', function() {
    assert.equal(topDomain(
      'not_a_valid_url'
    ), '');
  });

});
