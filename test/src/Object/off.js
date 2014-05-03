/**
 * @type    Feature
 * @use     to remove a generic function as event listener.
 *          Already removed listeners won't affect the object.
 * @require Array#indexOf
 * @param   the event name
 * @param   the function handler
 * @return  the object itself
 * @example

    function show(what) {
      console.log(this[what]);
    }
    var o = {prop: 123}.on('show', show);

    o.off('show', show);

    o.emit('show', 'prop'); // ... nothing happens

 */
Object.prototype.off = function(t, h){
  var _ = '_@',
      H = this[_],
      l = H && H[_ + t],
      i = l && l.indexOf(h);
  if (~i) l.splice(i, 1);
  return this;
};