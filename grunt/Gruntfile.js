module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(() => {
            console.log('Olá grunt');
            done()
        }, 4000);
    })

    grunt.registerTask('default', ['olaGrunt'])
} 