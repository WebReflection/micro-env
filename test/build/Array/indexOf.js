[].indexOf||(Array.prototype.indexOf=function(e,t){for(var n=this.length,r=t<0?n+t<0?0:n+t:t||0;r<n&&this[r++]!==e;);return n<=r?-1:r-1});