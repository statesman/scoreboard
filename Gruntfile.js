var fs = require("fs");

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Empty directories before build process
    clean: {
      css: ["public/dist/*.css", "public/dist/*.css.map", "build/*.scss"],
      js: ["build/*.js", "public/dist/*.js", "public/dist/*.js.map"]
    },

    // Transpile SASS
    sass: {
      dist: {
        options: {
          loadPath: 'bower_components/foundation/scss',
          style: 'compressed'
        },
        files: {
          'public/dist/styles.css': 'src/css/style.scss'
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
          dest: 'public/fonts/',
          flatten: true
        }]
      },
      aths: {
        files: [{
          src: [
            'bower_components/add-to-homescreen/style/addtohomescreen.css'
          ],
          dest: 'build/aths.scss'
        }]
      },
      iosoverlay: {
        files: [{
          src: [
            'bower_components/iOS-Overlay/css/iosOverlay.css'
          ],
          dest: 'build/iosoverlay.scss'
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
          baseUrl: 'src/js',
          mainConfigFile: 'src/js/main.js',
          out: 'public/dist/scripts.js',
          optimize: 'uglify2',
          include: [
            'app'
          ],
          name: '../../bower_components/almond/almond',
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
        files: ['public/index.php']
      },
      scripts: {
        files: ['src/js/**.js', 'src/js/**/**.js', 'src/templates/**/*.hbs', 'src/templates/helpers.js'],
        tasks: ['jshint', 'clean:js', 'handlebars', 'requirejs']
      },
      styles: {
        files: ['src/css/**.scss'],
        tasks: ['clean:css', 'copy:iosoverlay', 'copy:aths', 'sass']
      }
    },

    // stage path needs to be set
    ftpush: {
      stage: {
        auth: {
          host: 'host.coxmediagroup.com',
          port: 21,
          authKey: 'cmg'
        },
        src: 'public',
        dest: '/stage_aas/projects/sports/scores/',
        exclusions: ['dist/tmp','Thumbs.db','.DS_Store'],
        simple: false,
        useList: false
      },
      // prod path will need to change
      prod: {
        auth: {
          host: 'host.coxmediagroup.com',
          port: 21,
          authKey: 'cmg'
        },
        src: 'public',
        dest: '/prod_aas/projects/sports/scores/',
        exclusions: ['dist/tmp','Thumbs.db','.DS_Store'],
        simple: false,
        useList: false
      }
    },

    // be sure to set publishing paths
    slack: {
        options: {
          endpoint: fs.readFileSync('.slack', {encoding: 'utf8'}),
          channel: '#bakery',
          username: 'gruntbot',
          icon_url: 'http://vermilion1.github.io/presentations/grunt/images/grunt-logo.png'
        },
        stage: {
          text: 'Project published to stage: http://stage.host.coxmediagroup.com/aas/projects/sports/scores/ {{message}}'
        },
        prod: {
          text: 'Project published to prod: http://projects.statesman.com/sports/scores/ {{message}}'
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
  grunt.loadNpmTasks('grunt-ftpush');
  grunt.loadNpmTasks('grunt-slack-hook');

  grunt.registerTask('build', ['clean', 'copy', 'sass', 'handlebars', 'jshint', 'requirejs']);
  grunt.registerTask('stage', ['build','ftpush:stage','slack:stage']);
  grunt.registerTask('prod', ['build','ftpush:prod','slack:prod']);

};
