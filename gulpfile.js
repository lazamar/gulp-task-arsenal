// List all available tasks
const organiser = require('gulp-organiser');
organiser.registerAll('./tasks', {
	'sass': {
		'src': './public_src/styles/**/*.scss',
		'dest': './public/styles/'
	},
	'copy-static': {
		'src': './public_src/**/*',
		'dest': './public',
		'map': {
			'./public_src/js_static/**/*': 'public/js'
		}
	},
	'transpile-react': {
		'watch': './public_src/js_es6/**/*.js',
		'src': './public_src/js_es6/*.js',
		'dest': './public/js',
    'config': { 'external': ['react', 'react-dom'], exports: 'named', format: 'cjs' },
	},
	'link-dependencies': {
		'dest': './public/js'
	},
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['transpile-react'], // reload page when these tasks happen
    startPath: 'example',
    baseDir: './',
  },
  'test-browser': {
    src:'./tests/unit/unit.js',
  },
  'test-headless': {
    src:'./tests/unit/unit.js',
  },
  'build-elm': {
    src: 'src/Main.elm',
    dest: 'dist',
    moduleName: 'ModalRouter',
    ext: 'js',
  },
});
