/* eslint-disable func-names */
module.exports = grunt => {
  // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Clean up old assets
    clean: ['build/assets'],

    // Copy html
    // Copy
    copy: {
      html: {
        expand: true,
        src: '**/*.html',
        dest: 'build',
        cwd: 'source'
      },

      config: {
        expand: true,
        src: '*.config',
        dest: 'build',
        cwd: 'source'
      },

      assets: {
        expand: true,
        src: '**/*',
        dest: 'build/assets',
        cwd: 'source/files'
      },

      fontassets: {
        expand: true,
        src: '**/*',
        dest: 'build/assets/fonts',
        cwd: 'source/fonts'
      },

      imgassets: {
        expand: true,
        src: '**/*',
        dest: 'build/assets/img',
        cwd: 'source/img'
      },

      dist: {
        expand: true,
        src: '**/*',
        dest: '../website/assets',
        cwd: 'build/assets'
      }
    },

    // Code Kit / PrePros script append/prepend processing
    codekit: {
      kitFiles: {
        files: [
          {
            expand: true,
            cwd: 'source',
            src: ['*.kit'],
            dest: 'build',
            ext: '.html'
          }
        ]
      },

      jsinclude: {
        files: {
          'build/assets/js/scripts.js': 'source/js/scripts.js'
        }
      }
    },

    // Minify the JavaScript into the build folder
    uglify: {
      scripts: {
        files: {
          'build/assets/js/min/scripts.min.js': ['build/assets/js/scripts.js']
        }
      }
    },

    // Lint the SCSS as per coding standards
    sasslint: {
      options: {
        configFile: '.sass-lint.yml',
        'cache-config': true
      },
      target: ['source/scss/**/*.scss', '!source/scss/vendor**/*.scss']
    },

    sass: {
      build: {
        options: {
          implementation: require('node-sass'),
          outputStyle: 'expanded',
          sourceMap: true
        },
        files: {
          'build/assets/css/styles.css': 'source/scss/styles.scss'
        }
      }
    },

    // Post CSS
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: [
              'last 2 versions',
              'last 4 iOS versions',
              'last 4 Android versions',
              'ie 9',
              'ie 10'
            ]
          }),
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        files: {
          'build/assets/css/styles.css': 'build/assets/css/styles.css'
        }
      }
    },

    browserSync: {
      default_options: {
        bsFiles: {
          src: ['build/assets/css/*.css', 'build/*.html']
        },
        options: {
          watchTask: true,
          server: {
            baseDir: 'build/'
          }
        }
      }
    },

    accessibility: {
      options: {
        accessibilityLevel: 'WCAG2A',
        reportLevels: {
          notice: false,
          warning: false,
          error: true
        }
      },
      test: {
        src: ['build/*.html']
      }
    },

    validation: {
      files: {
        src: ['build/*.html']
      }
    },

    // Transpile es6 code
    browserify: {
      dist: {
        files: {
          // destination for transpiled js : source js
          'build/assets/js/scripts.js': 'source/js/scripts.js'
        },
        options: {
          transform: [['babelify', { presets: ['@babel/preset-env'] }]],
          browserifyOptions: {
            debug: true
          }
        }
      }
    },

    eslint: {
      target: ['scripts.js']
    },

    prettier: {
      files: {
        src: [
          "source/js/**/*.js",
          "source/scss/**/*.scss",
        ]
      }
    },

    // Watch task with livereload
    watch: {
      html: {
        files: ['source/**/*.html', 'source/**/*.kit'],
        tasks: ['newer:codekit:kitFiles', 'newer:copy:html']
      },

      scripts: {
        files: ['source/js/**/*.js'],
        tasks: ['newer:eslint', 'browserify:dist']
      },

      styles: {
        files: 'source/scss/**/*.scss',
        tasks: ['newer:prettier', 'newer:sasslint', 'sass:build', 'newer:postcss']
      },

      video: {
        files: ['source/video/**/*'],
        tasks: ['copy:videoassets']
      },

      images: {
        files: ['source/img/**/*'],
        tasks: ['copy:imgassets']
      },

      webConfig: {
        files: ['source/web.config'],
        tasks: ['copy:webConfig']
      },

      livereload: {
        files: ['build/**/*'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', [
    // 'clean',
    // 'copy:html',
    // 'copy:config',
    // 'copy:fontassets',
    // 'copy:imgassets',
    'codekit',
    'browserify:dist',
    // 'sasslint',
    // 'sass:build',
    // 'postcss',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'clean',
    'copy:config',
    'copy:fontassets',
    'copy:imgassets',
    'codekit',
    'browserify:dist',
    'uglify',
    // 'sasslint',
    'sass:build',
    'postcss',
    'copy:dist'
  ]);
};
