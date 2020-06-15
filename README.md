balena-config-karma
==================

> Base balena Karma Test Runner configuration

[![npm version](https://badge.fury.io/js/balena-config-karma.svg)](http://badge.fury.io/js/balena-config-karma)
[![dependencies](https://david-dm.org/balena-io-modules/balena-config-karma.svg)](https://david-dm.org/balena-io-modules/balena-config-karma.svg)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/balena-io/chat)

Installation
------------

Install `balena-config-karma` by running:

```sh
$ npm install --save-dev balena-config-karma
```

Setup
-----

This module aims to provide a base [Karma](https://karma-runner.github.io) configuration for balena NPM modules.
It's preconfigured with the following assumptions about the modern balena.io modules structure:
- The distribution files are located in the `build` folder (typically created by building the TS or ES6+ sources)
and have the `.js` extension.
- The sources are located in `src` or `lib` folder and are in JS (ES) or TS.
- The test specs are located in the `tests` folder and have the double `.spec.js` or `.spec.ts` extension.
- The tests are importing the distribution or the source files.
It's recommended to simply import the root of the project and let `node` decide what to do, as in the real usage scenario.
It has the benefit of importing TS if the `types` entry is properly configured in `package.json`.

It supports the following features:
- Webpack transform for the tests bundle with ES2015 support and sourcemaps.
- Test are run in headless Chrome.
- Mocha support.
- CI mode enabled by default.

The module exposes a function returning the Karma configuration object
that you can pass to `config.set()` yourself.

To get started, create a `karma.conf.js` in the root of your project:

```js
var getKarmaConfig = require('balena-config-karma');
var packageJSON = require('./package.json');

module.exports = function(config) {
  var karmaConfig = getKarmaConfig(packageJSON /*, { wepbackConfig: optionalCustomWebpackConfig }*/)

  // Notice you can override the default options as you wish
  karmaConfig.logLevel = config.LOG_INFO;

  config.set(karmaConfig);
};
```

And run `karma start`.

Browsers
--------

The local tests run in the headless Chrome.

To run them locally you need Chrome >= 59 installed.

To run them on Travis add the following lines to your `.travis.yml` file:

```yaml
dist: trusty
sudo: false
addons:
  chrome: stable
```

*Note:* change `false` to `required` if you need sudo for your tests, see [the Travis Trusty docs](https://docs.travis-ci.com/user/reference/trusty/#Using-Trusty) and [the Travis container-based infrastructure docs](https://docs.travis-ci.com/user/migrating-from-legacy) for more details.

AppVeyor has the the proper Chrome version preinstalled.

Support
-------

If you're having any problem, please [raise an issue](https://github.com/balena-io-modules/balena-config-karma/issues/new) on GitHub and the balena team will be happy to help.
