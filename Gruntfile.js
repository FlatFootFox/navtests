module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: "assets/scss/**/*.scss",
            tasks: ['libsass']
        },
        libsass: {
            compile: {
                options: {
                  style: 'compact',
                },
                files: {
                  'assets/css/style.css': 'assets/scss/style.scss'
                },
            }, 
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "assets/css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-libsass');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ["browserSync", "watch"]);
};