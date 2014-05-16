module.exports = function (grunt) {

    grunt.initConfig({
        styleguide: {
            options: {
                framework: {
                    name: 'kss',
                    options: {
                        less: true
                    }
                }
            },
            generate: {
                files: {
                    'docs': 'src/vanilla.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-styleguide');
    grunt.registerTask('default', ['styleguide']);

};