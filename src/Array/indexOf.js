/**
 * @type    Basic Polyfill
 * @use     same as ES5 Array.prototype.indexOf
 * @caveats do not pass strings as second optional argument
 */
[].indexOf || (Array.prototype.indexOf = function (v, f) {
  for (var
    l = this.length,
    i = f < 0 ? (l + f < 0 ? 0 : l + f) : f || 0;
    i < l && this[i++] !== v;
  ){}
  return l <= i ? -1 : i - 1;
});