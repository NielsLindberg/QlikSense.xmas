module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['noscope/**'],
                    dest: 'C:/Users/Niels/Documents/Qlik/Sense/Extensions/',
                    filter: 'isFile'
                }]
            }
        },
        zip: {
            'noscope.zip': ['noscope/**']
        }
    });

    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy', 'zip']);
};