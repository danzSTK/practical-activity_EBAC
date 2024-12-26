module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          "dist/styles.css": "src/styles.less",
        },
      },
    },
    uglify: {
      build: {
        files: {
          "dist/scripts.min.js": ["src/scripts.js"],
        },
      },
    },

    copy: {
      html: {
        expand: true,
        cwd: "src/",
        src: "index.html",
        dest: "dist/",
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Registrando tarefas
  grunt.registerTask("default", ["less", "uglify", "copy"]);
};
