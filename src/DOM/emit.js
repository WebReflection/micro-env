/**
 * @type    Feature
 * @use     to dispatch an event handler
 * @require HTMLElement
 * @param   the event name
 * @param   optional detail property to pass to the DOM Event
 * @return  the node itself
 * @example

    document.body.once('click', function () {
      console.log('click');
    });
    document.body.emit('click'); // "click"

 */
HTMLElement.prototype.emit = function (t, a) {
  // this.ownerDocument is YAGNI and won't work with
  // document and window
  var e = document.createEvent('Event');
  e.initEvent(t, 1, 1);
  e.detail = a;
  this.dispatchEvent(e);
};