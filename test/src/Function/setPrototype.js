/**
 * @type    Feature
 * @use     to assign enumerables properties to the Function.prototype
 *          without overwriting the original one
 * @param   the object which properties will be copied over the prototype
 * @return  the function itself
 * @example

    // as utility
    function Person(name) {
      this.name = name;
    }
    Person.setPrototype({
      age: 0,
      growUp: function () {
        this.age++;
      }
    });

    // as inline declaration
    var Person = function(name) {
      this.name = name;
    }.setPrototype({
      age: 0,
      growUp: function () {
        this.age++;
      }
    });

 */
Function.prototype.setPrototype = function (o) {
  var p = this.prototype, k;
  for (k in o) o.hasOwnProperty(k) && (p[k] = o[k]);
  return this;
};