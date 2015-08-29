# top-domain [![Build Status](https://travis-ci.org/igormilla/top-domain.svg)](https://travis-ci.org/igormilla/top-domain)

Extract top domain from a given url.

npm and node.js friendly version of [segmentio/top-domain](https://github.com/segmentio/top-domain)

## Installation

    $ npm install top-domain

## Usage

```js

  var topDomain = require('top-domain');

  console.log(topDomain('http://example.com/'));
  //example.com
  console.log(topDomain('http://example.co.uk/'));
  //example.co.uk
  console.log(topDomain('http://www.example.co.uk/parameter1/parameter2/'));
  //example.co.uk

```
