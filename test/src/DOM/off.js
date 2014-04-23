/**
 * @type    Feature
 * @use     a removeEventListener shortcut
 * @require HTMLElement
 * @param   the event name
 * @param   the function/object handler
 * @param   the optional capture flag
 * @return  the node itself
 * @example

    function click() {
      this.setAttribute('clicked', 'true');
    }
    document.body.on('click', click);

    document.body.off('click', click);

    document.body.emit('click'); // ... nothing happens

 */
HTMLElement.prototype.off = function () {
  this.removeEventListener.apply(this, arguments);
  return this;
};