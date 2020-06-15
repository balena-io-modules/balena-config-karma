/*
 * Copyright 2016-20 Balena Ltd.
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

var path = require('path');

var MODULES_TO_TRANSPILE = [ 'chai-as-promised' ];

var DEFAULT_WEBPACK_CONFIG = {
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.coffee'],
  },
  mode: "development",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: {
              // to make the builds faster
              // types are probaly already checked in node
              transpileOnly: true
            },
          },
        ],
      },
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        loader: 'coffee-loader',
        options: {
          cacheDirectory: '/tmp',
        },
      },
      {
        test: /\.js$/,
        exclude: function (modulePath) {
          var parts = modulePath.split(path.sep);
          var i = parts.indexOf('node_modules');
          if (i < 0) {
            return false;
          }
          return MODULES_TO_TRANSPILE.indexOf(parts[i + 1]) < 0;
        },
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  chrome: '60',
                },
              },
            ],
          ],
          cacheDirectory: '/tmp',
        },
      }
    ],
  },
};

var TEST_FILES = [
  'tests/**/*.spec.js',
  'tests/**/*.spec.ts',
  'tests/**/*.spec.coffee'
];

var LIB_FILES = [
  'lib/**/*.ts',
  'lib/**/*.js',
  'lib/**/*.coffee',
  'src/**/*.ts',
  'src/**/*.js',
  'src/**/*.coffee',
  'build/**/*.js'
];

var ALL_FILES = TEST_FILES.concat(LIB_FILES);

var PREPROCESSORS = ALL_FILES.reduce(function(acc, file) {
  acc[file] = [ 'webpack', 'sourcemap' ];
  return acc;
}, {});

module.exports = function configure(packageJSON, overrides) {
  overrides = overrides || {};

  var config = {
    plugins: [
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ],
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    basePath: '',
    frameworks: [ 'mocha' ],
    files: [ 'node_modules/babel-polyfill/dist/polyfill.js' ].concat(TEST_FILES),
    preprocessors: PREPROCESSORS,
    webpack: overrides.webpackConfig || DEFAULT_WEBPACK_CONFIG,
    webpackServer: {
      noInfo: true
    },

    client: {
      captureConsole: true
    },

    reporters: [ 'mocha' ],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['ChromeHeadlessCustom'],
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox'
        ]
      }
    },
    singleRun: true,
    concurrency: Infinity,

    // Increase tolerance for unstable network connections
    captureTimeout: 300000,
    browserDisconnectTolerance: 5,
    browserNoActivityTimeout: 300000
  };

  return config;
};

module.exports.DEFAULT_WEBPACK_CONFIG = DEFAULT_WEBPACK_CONFIG;
