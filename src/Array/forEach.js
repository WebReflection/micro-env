/**
 * @type    Basic Polyfill
 * @use     same as ES5 Array.prototype.forEach
 * @caveats sparse Arrays are not looped properly
 *          we should not deal with sparse Arrays anyway
 */
[].forEach || (Array.prototype.forEach = function (f, c) {
  for (var i = 0; i < this.length; i++) f.call(c, this[i], i, this);
});