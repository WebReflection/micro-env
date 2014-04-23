/**
 * @type    Partial Shim
 * @use     to know if an Array contains already an element
 *          to retrieve the index of a generic item in an Array
 * @caveats the index, if any, is always the last one (lastIndexOf)
 *          no extra arguments (not part of the use case)
 */
[].indexOf || (Array.prototype.indexOf = function (v) {
  for (var i = this.length; i-- && this[i] !== v;){}
  return i;
});