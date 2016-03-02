module.exports = function(grunt) {

  grunt.initConfig({
	lessDir: 'public/less/',
    lessDistDir: 'dist/less/',
	cmqDistDir: 'dist/cmq/', 	
    jsDir: 'public/javascripts/',
    jsDistDir: 'dist/javascripts/',    
    cssDir: 'public/stylesheets/',
    cssDistDir: 'dist/stylesheets/',
    pkg: grunt.file.readJSON('package.json'),
	less: {
		development: {
			files: {
				'<%=lessDistDir%><%= pkg.name %>.css': '<%=lessDir%>*.less'
			}
		},
	},
	cmq: {
		options: {
			log: false
		},
		your_target: {
			files: {
				'<%=cmqDistDir%><%= pkg.name %>.css': '<%=lessDistDir%>*.css'
			}
		}
	},
	concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['<%=jsDir%>*.js'],
        dest: '<%=jsDistDir%><%= pkg.name %>.js'
      },
      css: {
        src: ['<%=cssDir%>*.css', '<%=cmqDistDir%>*.css'],
        dest: '<%=cssDistDir%><%= pkg.name %>.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%=jsDistDir%><%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          '<%=cssDistDir%><%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
        }
      }
    },
    watch: {
    files: ['<%=lessDir%>*.less', '<%=jsDir%>*.js', '<%=cssDir%>*.css'],
    tasks: ['less', 'cmq', 'concat', 'uglify', 'cssmin']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  grunt.registerTask('default', [
	'less',
	'cmq',
    'concat',
    'uglify',
    'cssmin',
    'watch'
  ]);
  
};