module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        expand: true,
        cwd: 'public/',
        src: [
          '**', '!js/**', '!css/**', '!bower_components/**'
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
          'public/app/app.js': ['dist/app/app.js']
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
        separator: ';',
        stripBanners: true
      },
      vendors: {
        src: [
          'bower_components/jquery/dist/jquery.min.js', 'bower_components/angular/angular.min.js', 'js/modernizr.min.js'
        ],
        dest: 'dist/js/vendors.js'
      },
      init: {
        src: [
          '!js/modernizr.min.js', 'js/*.js'
        ],
        dest: 'dist/js/init.js'
      },
      app: {
        src: [
          'app/app.js', 'app/controllers/*.js'
        ],
        dest: 'dist/app/app.js'
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
    es6transpiler: {
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
    'copy',
    'ngAnnotate',
    'es6transpiler',
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    'cssmin:generated',
    'usemin',
    'clean'
  ]);
};
