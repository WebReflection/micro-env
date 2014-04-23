/**
 * @type    Feature
 * @use     to have on, once, off, and emit in document and window too
 * @require HTMLElement, on, once, off, emit
 */
(function(w, p, d){
  d = w.document;
  d.on = w.on = p.on;
  d.off = w.off = p.off;
  d.emit = w.emit = p.emit;
}(window, HTMLElement.prototype));