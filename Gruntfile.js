module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        expand: true,
        cwd: 'public/',
        src: [
          '**', '!app/**', '!js/**', '!css/*', '!bower_components/**'
        ],
        dest: 'dist/'
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          'dist/app/app.js': ['public/app/**/*.js']
        }
      }
    },
    useminPrepare: {
      html: 'public/index.html'
    },
    usemin: {
      html: ['dist/index.html']
    },
    concat: {
      options: {
        stripBanners: true
      },
      vendors: {
        src: [
          'public/bower_components/jquery/dist/jquery.min.js', 'public/bower_components/angular/angular.min.js', 'public/js/modernizr.min.js'
        ],
        dest: 'dist/js/vendors.js'
      },
      init: {
        src: [
          '!public/js/modernizr.min.js', 'public/js/plugins.js', 'public/js/main.js'
        ],
        dest: 'dist/js/init.js'
      },
      googleapi: {
        src: [
          'public/js/google-maps-api.js', 'public/js/google-scripts.js'
        ],
        dest: 'dist/js/googleapi.js'
      }
    },
    uglify: {
      options: {
        report: 'min',
        mangle: false
      }
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: 'css',
            src: [
              '*.css', '!*.min.css'
            ],
            dest: 'dist/css',
            ext: '.min.css'
          }
        ]
      }
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: {
          'dist/app/app.js': 'dist/app/app.js'
        }
      }
    },
    clean: ['.tmp']
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', [
    'copy', 'ngAnnotate',
    'babel',
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    'cssmin:generated',
    'usemin',
    'clean'
  ]);
};
