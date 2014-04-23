/**
 * @type    Feature
 * @use     to dispatch/trigger/fire/emit an event handler
 * @param   the event name
 * @param   optional one or more arguments to pass
 * @return  the object itself
 * @example

    var o = {prop: 123}.on('show', function (what) {
      console.log(this[what]);
    });

    o.emit('show', 'prop'); // 123

 */
Object.prototype.emit = function(t) {
  for (var
    H = this._h,
    l = H ? H['_' + t] : [],
    a = l.slice.call(arguments, 1),
    s = 0,
    c;
    s < l.length;
    c.apply(this, a)
  ) c = l[s++];
};