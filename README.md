micro-env
=========

a tweet sized enriched environment

[![Build Status](https://travis-ci.org/WebReflection/micro-env.svg)](https://travis-ci.org/WebReflection/micro-env)


#### do more, with less
this is an experiment based on tiny snippets (so far all of them less than plain 140 bytes) which aim is to simplify and enrich the JS env.

The approach is not as unobtrusive and well tested as [eddy.js](https://github.com/WebReflection/eddy#event-driven-js) is but surely easier to maintain and experiment with.

Snippets either enrich the env polluting global prototype or bring new functionalities.

All snippets are [grouped in this folder](src/) with examples and descriptions.


#### which micro
Snippets are built to provide portable *env* files with all dependencies already resolved.
Here the list of various combinations:

  * [all.js](build/all.js) to include all snippets, mainly suitable for browsers
  * [env.js](build/env.js) to include everything but DOM related snipepts. This is the version built for node and others
  * [oop.js](build/oop.js) to include only `Function` and `Object` related snippets
  * [dom.js](build/dom.js) to include only `DOM` related shortcuts, browsers only
  * [base.js](build/base.js) to include only plain `Object` related snippets