[].every||(Array.prototype.every=function(e,t){for(var n=0;n<this.length&&e.call(t,this[n],n,this);n++);return n===this.length});