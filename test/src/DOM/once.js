/**
 * @type    Feature
 * @use     to add a generic function as event listener.
 *          Such event will be removed once triggered.
 * @require HTMLElement, on, off
 * @param   the event name
 * @param   the function/object handler
 * @param   the optional capture flag
 * @return  the node itself
 * @example

    document.body.once('click', function () {
      console.log('click');
    });
    document.body.emit('click'); // "click"
    document.body.emit('click'); // ... nothing happens

 */
HTMLElement.prototype.once = function (t, h, c) {
  var f = function(){
    this.off(t, f, !!c);
    h.apply(this, arguments);
  };
  return this.on(t, f, !!c);
};