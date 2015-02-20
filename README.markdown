# dom-to-string

[![Build Status](https://travis-ci.org/hemanth/dom-to-string.svg)](https://travis-ci.org/hemanth/dom-to-string) [![npm version](https://badge.fury.io/js/dom-to-string.svg)](http://badge.fury.io/js/dom-to-string)
> Cross browser DOM to String converter.

## Installation

`npm install dom-to-string --save`

## Usage

```js
const dom2str = require('dom-to-string');

var p = document.createElement('p');
p.innerHTML = "hello";

dom2str(p); // '<p>hello</p>'
```
