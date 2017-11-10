# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

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
