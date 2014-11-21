module.exports = function(grunt) {
  'use strict';

	// Load the plugin that clean files and directories.
	grunt.loadNpmTasks('grunt-contrib-clean');
  // Load the plugin that concatenate files.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Load the plugin that copy files and directories.
  grunt.loadNpmTasks('grunt-contrib-copy');
  // A convenient plugin but not necessary because you can just use 'copy' and 'delete' tasks in Grunt.
  // Built this more to fiddle around with Grunt and to gain some knowledge HowTo build a plugin for Grunt.
  grunt.loadNpmTasks('grunt-contrib-rename');
	// Load the plugin that minify and concatenate ".js" files.
	grunt.loadNpmTasks('grunt-contrib-uglify');
  // Run shell commands
  grunt.loadNpmTasks('grunt-shell');
  // Publish to GitHub Pages with Grunt
  grunt.loadNpmTasks('grunt-gh-pages');
	// Automatic notifications when tasks fail.
	grunt.loadNpmTasks('grunt-notify');

  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),

    /* clean directories */
    clean: ['dist', 'src/concat.js'],

    /* concat files */
    concat: {
      basic_and_extras: {
        files: {
          'src/concat.js': ['about.js', 'src/**/*.js'],
        },
      },
    },

    /* put files not handled in other tasks here */
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          src: ['concat.js'],
          dest: 'dist/'
        }]
      },
      site: {
        files: [{
          expand: true,
          dot: true,
          src: ['dist/*.js'],
          dest: 'docs/_site'
        }]
      }
    },

    /* rename files */
    rename: {
      main: {
        files: [{
          src: ['dist/concat.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }]
      }
    },

    /* js file minification */
    uglify: {
      options: {
        preserveComments: false
      },
			build: {
				src: 'dist/<%= pkg.name %>.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
    },

    /* build jekyll */
    shell: {
      jekyllBuild: {
        command: 'jekyll build --source docs --destination docs/_site'
      }
    },

    /* commit on gh-pages github */
    'gh-pages': {
      options: {
        base: 'docs/_site/',
        message: 'auto-generated commit'
      },
      src: ['**/*']
    }

	});

	// tasks
  grunt.registerTask('build', [
      'clean',
      'concat',
      'copy:dist',
      'rename',
      'uglify',
      'shell',
      'copy:site',
      'gh-pages'
  ]);

  grunt.registerTask('deploy', [
      'build'
  ]);

  grunt.registerTask('default', [
      'build'
  ]);
};
