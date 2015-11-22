// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'assets/dist/js/main.min.js': 
          [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/prism/prism.js',
            'assets/src/js/**/*.js',
            'assets/src/js/*.js'
          ]
        }
      }
    },

    sass: {
      dist: {
        files: {
          'assets/dist/css/screen.css': 'assets/src/sass/screen.scss'
        }
      }
    },
    
    autoprefixer:{
      build:{
        files:{
          'assets/dist/css/screen.css': 'assets/dist/css/screen.css'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'assets/dist/css/screen.min.css': 
          [
            'bower_components/font-awesome/css/font-awesome.min.css',
            'assets/dist/css/screen.css',
            'bower_components/prism/themes/prism-okaidia.css'
          ]
        }
      }
    },
    
    watch: {
      css: {
        files: ['assets/src/sass/**/*.scss'],
        tasks: ['sass','autoprefixer', 'cssmin']
      },
      js: {
        files: ['assets/src/js/**/*.js'],
        tasks: ['uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','autoprefixer', 'cssmin', 'uglify' ,'watch']);

};
