# top-domain
[![Build Status](https://travis-ci.org/igormilla/top-domain.svg)](https://travis-ci.org/igormilla/top-domain)
[![Test Coverage](https://codeclimate.com/github/igormilla/top-domain/badges/coverage.svg)](https://codeclimate.com/github/igormilla/top-domain/coverage)

Extract top domain from a given url.

npm and node.js friendly version of [segmentio/top-domain](https://github.com/segmentio/top-domain)

## Installation

    $ npm install top-domain

## Usage

```js

  var topDomain = require('top-domain');

  console.log(topDomain('http://amazon.com/'));
  //amazon.com
  console.log(topDomain('http://amazon.co.uk/'));
  //amazon.co.uk
  console.log(topDomain('http://www.amazon.co.uk/Pickle-Parade-1-Piece-Confused-Squirrel/dp/B00H9E7F44/'));
  //amazon.co.uk

```
