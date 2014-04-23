/**
 * @type    Basic Polyfill
 * @use     same as ES5 Array.prototype.every
 * @caveats sparse Arrays are not looped properly
 *          we should not deal with sparse Arrays anyway
 */
[].every || (Array.prototype.every = function (f, c) {
  for (var i = 0; i < this.length && f.call(c, this[i], i, this); i++){}
  return i === this.length;
});