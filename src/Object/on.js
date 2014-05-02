/**
 * @type    Feature
 * @use     to add a generic function as event listener.
 *          Already added listeners won't be added again.
 * @require Array#indexOf
 * @param   the event name
 * @param   the function handler
 * @return  the object itself
 * @example

    var o = {prop: 123}.on('show', function (what) {
      console.log(this[what]);
    });

    o.emit('show', 'prop'); // 123

 */
Object.prototype.on = function(t, h){
  var _ = '_@',
      H = this[_] || (this[_] = {}),
      l = H[_ + t] || (H[_ + t] = []);
  if (!~l.indexOf(h)) l.push(h);
  return this;
};