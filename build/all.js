[].every||(Array.prototype.every=function(e,t){for(var n=0;n<this.length&&e.call(t,this[n],n,this);n++);return n===this.length});[].filter||(Array.prototype.filter=function(e,t){for(var n=[],r=0,i=0,s=this,o;i<s.length;i++)e.call(t,o=s[i],i,s)&&(n[r++]=o);return n});[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)});[].indexOf||(Array.prototype.indexOf=function(e,t){for(var n=this.length,r=t<0?n+t<0?0:n+t:t||0;r<n&&this[r++]!==e;);return n<=r?-1:r-1});[].map||(Array.prototype.map=function(e,t){for(var n=[],r=0;r<this.length;r++)n[r]=e.call(t,this[r],r,this);return n});[].some||(Array.prototype.some=function(e,t){for(var n=0;n<this.length;n++)if(e.call(t,this[n],n,this))break;return n<this.length});Function.bind||(Function.prototype.bind=function(e){var t=this;return function(){return t.apply(e,arguments)}});(function(e){function t(){t[e]=null}Function[e].inherit=function(n){return t[e]=n[e],(this[e]=new t).constructor=this}})("prototype");Function.prototype.setPrototype=function(e){var t=this.prototype,n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return this};Object.prototype.emit=function(e){for(var t="_@",n=this[t],r=n?n[t+e]:[],i=r.slice.call(arguments,1),s=0;s<r.length;r[s++].apply(this,i));};Object.keys||(Object.keys=function(e){var t=Object.prototype.hasOwnProperty,n=[],r=0,i;for(i in e)t.call(e,i)&&(n[r++]=i);return n});Object.prototype.off=function(e,t){var n="_@",r=this[n],i=r&&r[n+e],s=i&&i.indexOf(t);return~s&&i.splice(s,1),this};Object.prototype.on=function(e,t){var n="_@",r=this[n]||(this[n]={}),i=r[n+e]||(r[n+e]=[]);return~i.indexOf(t)||i.push(t),this};Object.prototype.once=function(e,t){var n=function(){this.off(e,n),t.apply(this,arguments)};return this.on(e,n)};window.HTMLElement||(window.HTMLElement=window.Element||window.Node||function(){});HTMLElement.prototype.emit=function(e,t){var n=document.createEvent("Event");n.initEvent(e,1,1),n.detail=t,this.dispatchEvent(n)};HTMLElement.prototype.off=function(){return this.removeEventListener.apply(this,arguments),this};HTMLElement.prototype.on=function(){return this.addEventListener.apply(this,arguments),this};HTMLElement.prototype.once=function(e,t,n){var r=function(){this.off(e,r,!!n),t.apply(this,arguments)};return this.on(e,r,!!n)};(function(e,t,n){n=e.document,n.on=e.on=t.on,n.off=e.off=t.off,n.emit=e.emit=t.emit})(window,HTMLElement.prototype);