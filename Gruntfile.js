var arduino = process.env.ARDUINO_PATH;

console.log(arduino);
module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({
        // exec: create task dynamically see end of file for where this happens.
        exec: {
            compile_usb: {
                command: function() {
                    return arduino + " --verify --verbose-build --board arduino:avr:uno" +
                    " --pref build.path=firmware/bin/usb/uno/ firmware/build/usb/mbotFirmata/mbotFirmata.ino";
                },
            },
            compile_bluetooth: {
                command: function() {
                    return arduino + " --verify --verbose-build --board arduino:avr:uno" +
                    " --pref build.path=firmware/bin/bluetooth/uno/ firmware/build/bluetooth/mbotFirmata/mbotFirmata.ino";
                },
            },
        },
        'string-replace': {
            precompile: {
                files: [{
                    src: 'firmware/build/bluetooth/mbotFirmata/mbotFirmata.ino',
                    dest: 'firmware/build/bluetooth/mbotFirmata/mbotFirmata.ino',
                }],
                options: {
                    replacements: [{
                        pattern: /57600/g,
                        replacement: '115200',
                    }],
                },
            },
        },
        copy: {
            options: {
                timestamp: true,
            },

            firmata_usb: {
                cwd: 'firmware/src/',
                flatten: true,
                src: [ 'mbotFirmata/*' ],
                dest: 'firmware/build/usb/mbotFirmata/',
                expand: true,
                filter: 'isFile',
            },
            firmata_bluetooth: {
                cwd: 'firmware/src/',
                flatten: true,
                src: [ 'mbotFirmata/*' ],
                dest: 'firmware/build/bluetooth/mbotFirmata/',
                expand: true,
                filter: 'isFile',
            },
        },
        clean: {
            firmware_build: {
                src: [
                        'firmware/build/usb',
                        'firmware/build/bluetooth',
                     ]
            },
            compiled_bins: {
                src: [
                        'firmware/bin/*',
                    ]
            },
            post_compile: {
                src: [
                        'firmware/bin/usb/uno/!(*ino.hex)',
                        'firmware/bin/bluetooth/uno/!(*ino.hex)'
                    ]
            },
        },
    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-string-replace');

    grunt.registerTask('build', ['clean:firmware_build', 'clean:compiled_bins', 'copy', 'string-replace']);
    grunt.registerTask('compile', ['build', 'exec', 'clean:post_compile']);
};
