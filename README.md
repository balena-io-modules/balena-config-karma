resin-config-karma
==================

> Base Resin.io Karma Test Runner configuration

[![npm version](https://badge.fury.io/js/resin-config-karma.svg)](http://badge.fury.io/js/resin-config-karma)
[![dependencies](https://david-dm.org/resin-io-modules/resin-config-karma.svg)](https://david-dm.org/resin-io-modules/resin-config-karma.svg)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/resin-io/chat)

Installation
------------

Install `resin-config-karma` by running:

```sh
$ npm install --save-dev resin-config-karma
```

Setup
-----

This module aims to provide a base [Karma](https://karma-runner.github.io) configuration for Resin.io NPM modules. It offers out of the box support for the following things:

- Browserify with CoffeeScript transform.
- SauceLabs configuration.
- Mocha support.
- CI mode enabled by default.

The module exposes a Karma configuration object that you can pass to `config.set()` yourself.

To get started, create a `karma.conf.js` in the root of your project:

```js
var karmaConfig = require('resin-config-karma');
var packageJSON = require('./package.json');

module.exports = function(config) {

  // Notice you can override the default options as you wish
  karmaConfig.logLevel = config.LOG_INFO;
  karmaConfig.sauceLabs = {
    testName: "#{packageJSON.name} v#{packageJSON.version}"
  };

  config.set(karmaConfig);
};
```

And run `karma start`.

SauceLabs
---------

This configuration allows to easily setup your tests to run in SauceLabs by setting the following environment variables:

```sh
export SAUCE_LABS=true
export SAUCE_USERNAME=<username>
export SAUCE_ACCESS_KEY=<access key>
```

If `SAUCE_LABS` is not set, `karma` will only run the tests locally on PhantomJS.

Browsers
--------

The tests run in the browsers specified in [launchers.json](https://github.com/resin-io/resin-config-karma/blob/master/launchers.json).

Support
-------

If you're having any problem, please [raise an issue](https://github.com/resin-io/resin-config-karma/issues/new) on GitHub and the Resin.io team will be happy to help.
