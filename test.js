"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var dom2str = _interopRequire(require("./"));

var p = document.createElement("p");
p.innerHTML = "hello";

console.log(dom2str(p));

it("dom-to-string", function () {
  assert.equal(dom2str(p), "<p>hello</p>");
});