/**
 * @type    Basic Polyfill
 * @use     same as ES5 Array.prototype.some
 * @caveats sparse Arrays are not looped properly
 *          we should not deal with sparse Arrays anyway
 */
[].some || (Array.prototype.some = function (f, c) {
  for (var i = 0; i < this.length; i++){
    if (f.call(c, this[i], i, this)) break;
  }
  return i < this.length;
});