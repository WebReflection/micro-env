/**
 * @type    Basic Polyfill
 * @use     same as ES5 Array.prototype.map
 * @caveats sparse Arrays are not looped properly
 *          we should not deal with sparse Arrays anyway
 */
[].map || (Array.prototype.map = function (f, c) {
  for (var r = [], i = 0; i < this.length; i++) {
    r[i] = f.call(c, this[i], i, this);
  }
  return r;
});