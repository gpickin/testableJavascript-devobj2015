// Original Source: http://www.meanstack.co/setting-up-jasmine-and-grunt/

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('node_modules/grunt/package.json'),
		jasmine: {
			all: {
				src: [
					'js/jquery.min.js',
					'src/*.js' 
					],
				options: {
					//'vendor': ['path/to/vendor/libs/*.js'],
					'specs': ['specs/*.js' ]
				}
			}
		}, 

		watch: {
			js: {
				files: [
					'js/*.js',
					'specs/*.js',
				],
				tasks: ['jasmine:all']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');
};