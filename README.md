grunt-mocha-cov-threshold
=========================

Report and fail build on mocha json-cov thresholds

## Installation

    $ npm install grunt-mocha-cov-threshold --save-dev

## Usage

This task depends on the mocha `json-cov` reporter having been run first. That
reporter outputs a json file which we can use to insure coverage thresholds
have been met.

These are the defaults within the task.

```javascript
grunt.initConfig({
  mocha_cov_threshold: {
    options: {
      coverage: 60 // percentage threshold
    },
    ci: {
      jsonPath: 'test/coverage.json'      
    }
  }
});
```
