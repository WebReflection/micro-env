//remove:
var main = require('../build/env.js');
//:remove

var hasDOM = typeof document !== 'undefined';

wru.test([
  {
    name: "Array#every",
    test: function () {
      var o = {};
      wru.assert('works as expected', [1,2].every(function(v, i, a){
        return this === o &&
              arguments.length === 3 &&
              a.join(',') === '1,2' &&
              (
                (v === 1 && i === 0) ||
                (v === 2 && i === 1)
              )
      }, o));
      wru.assert('can return false too', ![1].every(function(v){return v < 0}));
    }
  }, {
    name: "Array#forEach",
    test: function () {
      var o = {}, result = true;
      [1,2].forEach(function(v, i, a){
        o[i] = v;
        result = result &&
              this === o &&
              arguments.length === 3 &&
              a.join(',') === '1,2' &&
              (
                (v === 1 && i === 0) ||
                (v === 2 && i === 1)
              )
      }, o);
      wru.assert('works as expected', result && o[0] === 1);
    }
  }, {
    name: "Array#indexOf",
    test: function () {
      wru.assert('works as expected', [1,2,3].indexOf(2) === 1);
      wru.assert('returns -1 too', [1,2,3].indexOf(4) === -1);
      wru.assert('accepts extra index', [1,2,3,2].indexOf(2,2) === 3);
      wru.assert('accepts negative index', [1,2,3,2].indexOf(2,-3) === 1);
    }
  }, {
    name: "Array#map",
    test: function () {
      var o = {}, r = [1,2].map(function(v, i, a){
        return this === o &&
              arguments.length === 3 &&
              a.join(',') === '1,2' &&
              (
                (v === 1 && i === 0) ||
                (v === 2 && i === 1)
              ) &&
              v * v * (i || 7)
      }, o);
      wru.assert('works as expected', r.join(',') === '7,4');
    }
  }, {
    name: "Array#some",
    test: function () {
      var o = {};
      wru.assert('works as expected', [1,2].some(function(v, i, a){
        o[i] = v;
        return this === o &&
              arguments.length === 3 &&
              a.join(',') === '1,2' &&
              (
                (v === 1 && i === 0)
              )
      }, o) && !o[1]);
      wru.assert('can return false too', ![1].some(function(v){return v < 0}));
    }
  }, {
    name: 'Function#bind',
    test: function () {
      var o = {};
      wru.assert('works as expected', function(a){return a === 123 && this}.bind(o).call(null, 123) === o);
    }
  }, {
    name: 'Function#inherit',
    test: function () {
      function A() {}
      function B() {}
      var b;
      wru.assert('works as expected', B.inherit(A) === B && (b = new B) instanceof A && b instanceof B);
    }
  }, {
    name: 'Function#setPrototype',
    test: function () {
      function A() {}
      wru.assert('works as expected', A.setPrototype({test:456}) === A && (new A).test === 456);
    }
  }, {
    name: 'Object#emit',
    test: function () {
      var o = {};
      o.on('test', function () {
        o.arguments = arguments;
        o.self = this;
      });
      o.emit('test', 1, 'b');
      wru.assert('works as expected', [].slice.call(o.arguments).join(',') === '1,b' && o.self === o);
    }
  }, {
    name: 'Object.keys',
    test: function () {
      wru.assert(Object.keys({a:1, b:2}).sort().join(',') === 'a,b');
    }
  }, {
    name: 'Object#off',
    test: function () {
      function test() {
        o.arguments = arguments;
        o.self = this;
      }
      var o = {};
      o.on('test', test);
      o.emit('test', 1, 'b');
      wru.assert('was invoked', [].slice.call(o.arguments).join(',') === '1,b' && o.self === o);
      delete o.arguments;
      delete o.self;
      o.emit('test', 2, 'c');
      wru.assert('was invoked again', [].slice.call(o.arguments).join(',') === '2,c' && o.self === o);
      delete o.arguments;
      delete o.self;
      o.off('test', test);
      o.emit('test', 1, 'b');
      wru.assert('was not invoked', o.arguments === o.self && o.self === undefined);
    }
  }, {
    name: 'Object#on',
    test: function () {
      function test() {
        this.i++;
      }
      var o = {i:0};
      o.on('test', test);
      o.on('test', test);
      o.emit('test');
      wru.assert('works as expected', o.i === 1);
    }
  }, {
    name: 'Object#once',
    test: function () {
      function test() {
        this.i++;
      }
      var o = {i:0};
      o.once('test', test);
      o.emit('test');
      o.emit('test');
      o.emit('test');
      wru.assert('works as expected', o.i === 1);
    }
  }
].concat(hasDOM ? [
  {
    name: 'DOM#emit',
    test: function () {
      function se(e) {
        o.arguments = arguments;
        o.self = this;
      }
      var o = {};
      document.on('some:event', se);
      document.emit('some:event', o);
      document.off('some:event', se);
      wru.assert('works as expected',
        o.self === document &&
        o.arguments[0].detail === o
      );
    }
  }, {
    name: 'DOM#off',
    test: function () {
      function se(e) {
        o.arguments = arguments;
        o.self = this;
      }
      var o = {};
      document.on('some:event', se);
      document.emit('some:event', o);
      document.off('some:event', se);
      wru.assert('dispatched',
        o.self === document &&
        o.arguments[0].detail === o
      );
      o.self = o.arguments = null;
      document.emit('some:event', o);
      wru.assert('did not dispatch',
        o.self === null &&
        o.arguments === null
      );
    }
  }, {
    name: 'DOM#on',
    test: function () {
      function se(e) {
        o.i++;
      }
      var o = {i:0};
      document.on('some:event', se);
      document.on('some:event', se);
      document.emit('some:event', o);
      document.off('some:event', se);
      wru.assert('works as expected',
        o.i === 1
      );
    }
  }, {
    name: 'DOM#once',
    test: function () {
      function se(e) {
        o.i++;
      }
      var o = {i:0};
      document.once('some:event', se);
      document.emit('some:event', o);
      document.emit('some:event', o);
      wru.assert('works as expected',
        o.i === 1
      );
    }
  }
] : []));
