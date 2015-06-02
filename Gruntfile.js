module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/app.js',
                dest: 'build/js/app.min.js'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        cssmin: {
            target: {
                files: {
                    'build/css/style.min.css': ['src/css/style.css']
                }
            }
        },
        qunit: {
            all: ['test/**/*.html']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'qunit', 'uglify', 'cssmin']);

};