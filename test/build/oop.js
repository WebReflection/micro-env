[].indexOf||(Array.prototype.indexOf=function(e,t){for(var n=this.length,r=t<0?n+t<0?0:n+t:t||0;r<n&&this[r++]!==e;);return n<=r?-1:r-1});Function.bind||(Function.prototype.bind=function(e){var t=this;return function(){return t.apply(e,arguments)}});(function(e){function t(){t[e]=null}Function[e].inherit=function(n){return t[e]=n[e],(this[e]=new t).constructor=this}})("prototype");Function.prototype.setPrototype=function(e){var t=this.prototype,n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return this};Object.prototype.emit=function(e){for(var t="_@",n=this[t],r=n?n[t+e]:[],i=r.slice.call(arguments,1),s=0;s<r.length;r[s++].apply(this,i));};Object.keys||(Object.keys=function(e){var t=Object.prototype.hasOwnProperty,n=[],r=0,i;for(i in e)t.call(e,i)&&(n[r++]=i);return n});Object.prototype.off=function(e,t){var n="_@",r=this[n],i=r&&r[n+e],s=i&&i.indexOf(t);return~s&&i.splice(s,1),this};Object.prototype.on=function(e,t){var n="_@",r=this[n]||(this[n]={}),i=r[n+e]||(r[n+e]=[]);return~i.indexOf(t)||i.push(t),this};Object.prototype.once=function(e,t){var n=function(){this.off(e,n),t.apply(this,arguments)};return this.on(e,n)};