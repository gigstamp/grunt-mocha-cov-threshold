
/**
 * Module dependencies.
 */

var JSONCov = require('grunt-mocha-cov/node_modules/mocha/lib/reporters/json-cov');
var SpecReporter = require('grunt-mocha-cov/node_modules/mocha/lib/reporters/spec');
var fs = require('fs');

exports = module.exports = CoverageThresholdSpec;

function CoverageThresholdSpec(runner) {
  var self = this;
  var spec = new SpecReporter(runner);
  JSONCov.call(this, runner, false);
  runner.on('end', function(){
    fs.writeFileSync('coverage.json', JSON.stringify(self.cov));
  });
}
CoverageThresholdSpec.prototype = Object.create(JSONCov.prototype);
CoverageThresholdSpec.prototype.constructor = CoverageThresholdSpec;

