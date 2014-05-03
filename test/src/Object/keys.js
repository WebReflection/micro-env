/**
 * @type    Basic Polyfill
 * @use     same as ES5 Object.keys
 */
Object.keys || (Object.keys = function (o) {
  var h = Object.prototype.hasOwnProperty,
      r = [],
      i = 0,
      k;
  for (k in o) {
    if (h.call(o, k)) {
      r[i++] = k;
    }
  }
  return r;
});