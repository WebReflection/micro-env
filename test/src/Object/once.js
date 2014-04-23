/**
 * @type    Feature
 * @use     to add a generic function as event listener.
 *          Such event will be removed once triggered.
 * @require on, off
 * @param   the event name
 * @param   the function handler
 * @return  the object itself
 * @example

    var o = {prop: 123}.once('show', function (what) {
      console.log(this[what]);
    });

    o.emit('show', 'prop'); // 123
    o.emit('show', 'prop'); // ... nothing happens

 */
Object.prototype.once = function(t, h){
  return this.on(t, function f() {
    this.off(t, f);
    h.apply(this, arguments);
  });
};