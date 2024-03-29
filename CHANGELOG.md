# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 2.1.0 - 2017-11-13

## 4.0.2 - 2023-05-31

* Update flowzone.yml [Kyle Harding]

## 4.0.1 - 2022-09-26

* Delete redundant .resinci.yml [Thodoris Greasidis]

## 4.0.0 - 2022-09-22

* Re-export the webpack instance [Thodoris Greasidis]
* Stop exporting the DEFAULT_WEBPACK_CONFIG [Thodoris Greasidis]
* Bump webpack to v5 [Thodoris Greasidis]

## 3.0.1 - 2022-09-22

* Replace balenaCI with flowzone [Thodoris Greasidis]

# v3.0.0
## (2020-06-15)

* Drop built-in configuration for SauceLabs [Thodoris Greasidis]
* Set chrome 60 as the compatibility target [Thodoris Greasidis]
* Upgrade babel, webpack  & move to ts-loader [Thodoris Greasidis]
* Rename everything resin to balena [Thodoris Greasidis]

## v2.3.1 - 2018-09-17

* Update scripts for newer npm versions [Pagan Gazzard]

## v2.3.0 - 2018-09-17

* Add headless Chrome parameters to work on ResinCi [Thodoris Greasidis]

## v2.2.0 - 2018-09-14

* Export DEFAULT_WEBPACK_CONFIG so that it can be extended [Pagan Gazzard]
* Add coffeescript support [Pagan Gazzard]

- Remove opera from the Sauce Labs Launcher (seems now unsupported)

## [2.0.0] - 2017-08-02

### Breaking

- Exports the factory function now instead of the singleton object
- Switched to Chrome headless instead of PhantomJS
- Switched to Webpack+Babel instead of Browserify
- Dropped support for `CoffeeScript`
- Assume the new structure (tests in JS or TS, built distribution files in JS, sources in JS/ES or TS).

## [1.0.4] - 2016-02-18

### Removed

- Remove Firefox Dev Sauce Labs launcher.

## [1.0.3] - 2016-02-18

### Removed

- Remove Chrome Dev Sauce Labs launcher.

## [1.0.2] - 2016-02-18

### Removed

- Remove Chrome Beta Sauce Labs launcher.

## [1.0.1] - 2016-02-04

### Changed

- Downgrade Browserify to v12.0.0 to avoid a `peerDependency` error in NodeJS v0.10.

[2.0.0]: https://github.com/resin-io-modules/resin-config-karma/compare/v1.0.4...v2.0.0
[1.0.4]: https://github.com/resin-io-modules/resin-config-karma/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/resin-io-modules/resin-config-karma/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/resin-io-modules/resin-config-karma/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/resin-io-modules/resin-config-karma/compare/v1.0.0...v1.0.1
