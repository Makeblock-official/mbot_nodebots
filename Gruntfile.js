var arduino = process.env.ARDUINO_PATH;

module.exports = function(grunt) {
 
    // configure the tasks
    grunt.initConfig({
        // exec: create task dynamically see end of file for where this happens.
        exec: {
            compile: {
                command: function() {
                    return arduino + " --verify --verbose-build --board arduino:avr:uno" + 
                    " --pref build.path=firmware/bin/uno/ firmware/mbotFirmata/mbotFirmata.ino";
                },
            },
        },
        clean: {
            compiled_bins: {
                src: [
                        'firmware/bin/uno/*',
                    ]
            },
            post_compile: {
                src: [
                        'firmware/bin/uno/!(*ino.hex)'
                    ]
            },
        },
    });
 
    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('build', ['clean:compiled_bins']);
    grunt.registerTask('compile', ['build', 'exec', 'clean:post_compile']);
};
