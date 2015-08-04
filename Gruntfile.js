module.exports = function( grunt ) {
 
  	grunt.initConfig({

    		browserSync: {
              dev: {
                  bsFiles: {
                      src : [
                      	'images/**/*.*',
                      	'scripts/**/*.js',
                        'styles/**/*.css',
                        '*.html'
                      ]
                  },
                  options: {
                      watchTask: true,
                      server: './'
                  }
              }
          }, // browserSync

        watch : {
    	    	options: {
    				  livereload: true,
      			},
      			html: {
      				files: [ '*.html' ],
      			},
      			js: {
      				files: [ 'scripts/**/*.js' ],
      			},
      			css: {
      				files: [ 'styles/**/*.css' ],
      			}
  	    }, // watch

    });



    // Plugins
    grunt.loadNpmTasks( 'grunt-browser-sync' );
  	grunt.loadNpmTasks( 'grunt-contrib-watch' );
  	
  	// Tarefas
  	grunt.registerTask( 'default', [ 'browserSync', 'watch' ] );
};