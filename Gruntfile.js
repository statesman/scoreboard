module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Empty directories before build process
    clean: {
      css: ["dist/*.css", "dist/*.css.map"],
      js: ["build/*.js", "dist/*.js", "dist/*.js.map"]
    },

    // Transpile SASS
    sass: {
      dist: {
        options: {
          loadPath: 'bower_components/foundation/scss',
          style: 'compressed'
        },
        files: {
          'dist/styles.css': 'src/css/style.scss'
        }
      }
    },

    // Copy Font-Awesome and FontCustom fonts
    copy: {
      fonts: {
        files: [{
          expand: true,
          src: [
            'bower_components/font-awesome/fonts/*',
            'src/fontcustom/fonts/*'
          ],
          dest: 'fonts/',
          flatten: true
        }]
      }
    },

    // Pre-render Handlebars templates
    handlebars: {
      options: {
        // Returns the filename, with its parent directory if
        // it's in a subdirectory of the src/templates folder
        processName: function(filePath) {
          var path = filePath.toLowerCase(),
              pieces = path.split("/"),
              name = '';
          if(pieces[pieces.length - 2] !== 'templates') {
            name = name + pieces[pieces.length - 2];
          }
          name = name + pieces[pieces.length - 1];
          return name.split(".")[0];
        }
      },
      compile: {
        files: {
          'build/templates.js': ['src/templates/**/*.hbs']
        }
      }
    },

    // Run our JavaScript through JSHint
    jshint: {
      js: {
        src: ['src/js/**.js']
      }
    },

    // Uglify/minify concatenated scripts
    uglify: {
      options: {
        sourceMap: true
      },
      js: {
        files: {
          "dist/scripts.js": [
            'bower_components/store/store.js',
            'bower_components/moment/moment.js',
            'bower_components/handlebars/handlebars.runtime.js',
            'src/templates/helpers/**.js',
            'build/templates.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/underscore/underscore.js',
            'bower_components/backbone/backbone.js',
            'bower_components/add-to-homescreen/src/addtohomescreen.js',
            'src/js/app.js'
          ]
        }
      }
    },

    // Watch for changes in SASS and JavaScript files,
    // relint/retranspile when a file
    watch: {
      options: {
        livereload: 35729,
      },
      markup: {
        files: ['index.php']
      },
      scripts: {
        files: ['src/js/**.js', 'src/templates/**/*.hbs', 'src/templates/helpers/*.js'],
        tasks: ['jshint', 'clean:js', 'handlebars', 'uglify']
      },
      styles: {
        files: ['src/css/**.scss'],
        tasks: ['clean:css', 'sass']
      }
    }

  });

  // Load the task plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['copy', 'clean', 'sass', 'handlebars', 'jshint', 'uglify']);

};
