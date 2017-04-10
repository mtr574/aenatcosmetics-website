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
          'dist/app/app.js': ['dist/app/app.js']
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
          '!public/js/modernizr.min.js', 'public/js/*.js'
        ],
        dest: 'dist/js/init.js'
      },
      app: {
        src: [
          'public/app/*.js', 'public/app/controllers/*.js'
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
    'es6transpiler',
    'ngAnnotate',
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    'cssmin:generated',
    'usemin',
    'clean'
  ]);
};
