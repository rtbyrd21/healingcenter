module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.initConfig({
    uglify: {
      my_target : {
        files: {
          '_/js/script.js': ['_/components/js/*.js']
        } //files
      } //my_target
    }, //uglify
    compass: {
      dev: {
        options:{
          config: 'config.rb'
        } //options
      } //dev
    }, //compass
    express: {
      options: {
        port: 3000,
        delay: 500,
        background: true
      },
      dev: {
        options: {
          script: './app.js'
        }
      },
      prod: {
        options: {
          script: './app.js',
          node_env: 'production'
        }
      }
    },//express
    watch: {
//      options: {livereload: true},
//      express: {
//      files:  [ '**/*.js' ],
//      tasks:  [ 'express:dev' ],
//      options: {
//        spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
//      }
//    },
      scripts: {
      files: ['_/components/js/*.js'],
      tasks: ['uglify']
      }, //script
      sass: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      }, //sass
      php: {
        files: ['*.php']
      }
    } //watch
    
  }) //initConfig
  grunt.registerTask('default', 'server', [ 'express:dev', 'watch' ]);
} //exports
