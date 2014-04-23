/**
 * @type    Partial Shim
 * @use     to bind a context to a generic function
 * @caveats no partial arguments (not part of the use case)
 */
Function.bind || (Function.prototype.bind = function (c) {
  var f = this;
  return function () {
    return f.apply(c, arguments);
  };
});