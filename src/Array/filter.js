/**
 * @type    Basic Polyfill
 * @use     same as ES5 Array.prototype.filter
 * @caveats sparse Arrays are not looped properly
 *          we should not deal with sparse Arrays anyway
 */
[].filter || (Array.prototype.filter = function (f, c) {
  for (var r = [], j = 0, i = 0, s = this, t; i < s.length; i++) {
    if (f.call(c, t = s[i], i, s)) {
      r[j++] = t;
    }
  }
  return r;
});