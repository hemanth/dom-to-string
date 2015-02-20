import assert from 'assert';
import dom2str from './';

var p = document.createElement('p');
p.innerHTML = "hello";

it('dom-to-string', () => {
  assert.equal(dom2str(p), '<p>hello</p>');
});
