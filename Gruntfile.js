/* Grunt Wrapper*/
module.exports = function(grunt) {
/* Project configuration*/
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      /*defines your global sources */
        globals: {
            dist: 'dist'
        },
        /* Compiles your Sass in a neat css file */
        sass: {
            style: {
                files: {
                    'css/main.css': 'css/main.scss',
                }
            }
        },
        /* Watches for changes to your Sass+HTML+JS files */
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['*.html'],
            },
            css: {
                files: [' css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true,
                    spawn: false,
                },
            },
        },
    });
    /* Loads in tasks you’ve defined in the package.json file */
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    /* Spefied tasks are defined here. */
    grunt.registerTask('default', ['watch', 'sass']);
};