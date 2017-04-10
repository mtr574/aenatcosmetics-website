module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: [
      "dist", '.tmp'
    ],

    copy: {
      main: {
        expand: true,
        cwd: 'app/',
        src: [
          '**', '!js/**', '!lib/**', '!**/*.css'
        ],
        dest: 'dist/'
      }
    },

    rev: {
      files: {
        src: ['dist/**/*.{js,css}', '!dist/js/shims/**']
      }
    },

    useminPrepare: {
      html: 'app/index.html'
    },

    usemin: {
      html: ['dist/index.html']
    },

    uglify: {
      options: {
        report: 'min',
        mangle: false
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask('default', [
    'copy',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'rev',
    'usemin'
  ]);
};
