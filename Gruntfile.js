module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      compile: {
        options: {
          module: "amd",
          sourcemap: true,
          target: "es5"
        },
        src: ["src/Main.ts"],
        dest: "bin/main.js"
      }
    }
  });

  //load NPM tasks
  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ["typescript"]);
  grunt.registerTask('travis', ["typescript"]);

};
