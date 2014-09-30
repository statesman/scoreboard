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
        namespace: "Templates",
        amd: ['handlebars', 'helpers'],
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

    // Runs the r.js optimizer
    requirejs: {
      compile: {
        options: {
          baseUrl: 'src',
          mainConfigFile: 'src/js/main.js',
          out: 'dist/scripts.js',
          optimize: 'uglify2',
          include: [
            'js/app'
          ],
          name: '../bower_components/almond/almond',
          generateSourceMaps: true,
          preserveLicenseComments: false
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
        files: ['src/js/**.js', 'src/templates/**/*.hbs', 'src/templates/helpers.js'],
        tasks: ['jshint', 'clean:js', 'handlebars', 'requirejs']
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build', ['copy', 'clean', 'sass', 'handlebars', 'jshint', 'requirejs']);

};
