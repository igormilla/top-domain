# top-domain [![Build Status](https://travis-ci.org/igormilla/top-domain.svg)](https://travis-ci.org/igormilla/top-domain)
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
  console.log(topDomain('http://www.amazon.co.uk/Pickle-Parade-1-Piece-Confused-Squirrel/dp/B00H9E7F44/ref=sr_1_2?ie=UTF8&qid=1440355451&sr=8-2&keywords=squirrel'));
  //amazon.co.uk

```
