/*
 * Copyright 2016 Resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var launchers = require('./launchers.json');

var config = {
  plugins: [
    require('karma-mocha'),
    require('karma-phantomjs-launcher'),
    require('karma-sauce-launcher'),
    require('karma-browserify')
  ],
  basePath: '',
  frameworks: [ 'browserify', 'mocha' ],
  files: [
    'lib/*.coffee',
    'tests/*.spec.coffee'
  ],
  exclude: [],
  preprocessors: {
    '**/*.coffee': [ 'browserify' ]
  },
  browserify: {
    debug: true,
    transform: [ require('coffeeify') ],
    extensions: [ '.js', '.coffee' ]
  },
  reporters: [ 'progress' ],
  port: 9876,
  colors: true,
  autoWatch: false,
  browsers: [ 'PhantomJS' ],
  singleRun: true,
  concurrency: Infinity,

  // Increase tolerance for unstable network connections
  captureTimeout: 300000,
  browserDisconnectTolerance: 5,
  browserNoActivityTimeout: 300000
};

if (process.env.SAUCE_LABS) {

  console.info('Running in SauceLabs');

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.error('Missing SAUCE_USERNAME or SAUCE_ACCESS_KEY env vars');
    process.exit(1);
  }

  // Browsers to run on Sauce Labs
  // https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-Selenium-SpecificOptions
  config.customLaunchers = launchers;
  config.browsers = config.browsers.concat(Object.keys(config.customLaunchers));

  config.reporters.push('saucelabs');

  // Avoid choking SauceLabs when running many tests at once
  config.concurrency = 1;
}

module.exports = config;
