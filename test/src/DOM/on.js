/**
 * @type    Feature
 * @use     an addEventListener shortcut
 * @require HTMLElement
 * @param   the event name
 * @param   the function/object handler
 * @param   the optional capture flag
 * @return  the node itself
 * @example

    document.body.on('click', function () {
      this.setAttribute('clicked', 'true');
    }).setAttribute('clicked', 'false');

 */
HTMLElement.prototype.on = function () {
  this.addEventListener.apply(this, arguments);
  return this;
};