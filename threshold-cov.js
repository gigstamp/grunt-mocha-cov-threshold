
/**
 * Module dependencies.
 */

var JSONCov = require('grunt-mocha-cov/node_modules/mocha/lib/reporters/json-cov')
  , fs = require('fs');

/**
 * Expose `HTMLCov`.
 */

exports = module.exports = HTMLCov;

/**
 * Initialize a new `JsCoverage` reporter.
 *
 * @param {Runner} runner
 * @api public
 */
function HTMLCov(runner) {
  var self = this;

  JSONCov.call(this, runner, false);

  runner.on('end', function(){
    fs.writeFileSync('coverage.json', JSON.stringify(self.cov));
  });
}

