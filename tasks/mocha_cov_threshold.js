
module.exports = function(grunt){
  grunt.registerMultiTask('mocha_cov_threshold', function(){
    
    var options = this.options({
      coverage: 60,
      jsonPath: 'test/coverage.json'
    });

    var json = grunt.file.readJSON(options.jsonPath);
    if (json && json.coverage){
      grunt.log.writeln('Code coverage at', parseInt(json.coverage) + '%');
      if (json.coverage < options.coverage){
        grunt.log.error('Code coverage less than limit ', options.coverage);
      }
    } else {
      grunt.log.writeln('No coverage found');
    }

  });
};

