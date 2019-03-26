'use strict';

/* --- modules --- */

let gulp = require('gulp');
let del = require('del');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let gutil = require('gulp-util');
let size = require('gulp-size');
let gif = require('gulp-if');
let zipper = require('gulp-zip');
let babelify = require('babelify');
let pJson = require('./package.json');

let chalk = gutil.colors;

/* --- config --- */

let dev = gutil.env.dev;

let zipName = 'es6.zip';

let paths = {
  root: './',
  src: './src',
  dist: './examples',
  distStatic: './examples/static'
};

let src = {
  js: paths.src + '/js/**/*.js',
  tmpl: paths.src + '/tmpl/**/*.*',
  other: paths.src + '/other/**/*.*',
  jsSimple: paths.src + '/js'
};

let logYellow = chalk.yellow;
let logBlue = chalk.blue;
let logMagents = chalk.magenta;
let logGray = chalk.gray;

// filename, use jstify
let browserifyFiles = [
  ['example1.js'],
  ['example2.js'],
  ['example3.js']
];

let browserifyTasks = [];

let logArray = [];

/* --- name && version --- */

logArray.push(logYellow(pJson.name));
logArray.push(logBlue(pJson.version));
logArray.push(logMagents('DEV:' + (dev ? 'ON' : 'OFF')));
if (!dev) {
  logArray.push(logGray('(pass --dev to turn it on)'));
}

gutil.log.apply(gutil.log, logArray);

/* --- functions --- */

function generateName(name, len) {
  if (len) {
    return name.slice(0, -len);
  } else {
    return name.split('.').slice(0, -1);
  }
}

function browserifyHandler(file) {

  let b = browserify({
    entries: src.jsSimple + '/' + file,
    debug: true,
    transform: [
      babelify.configure({
        presets: ['es2015']
      })
    ]
  });

  return b.bundle()
    .pipe(source(file))
    .pipe(buffer())
    .pipe(gif(!dev, sourcemaps.init({loadMaps: true})))
    .pipe(gif(!dev, uglify()))
    .on('error', gutil.log)
    .pipe(size({showFiles: true, title: 'browserify'})) //no maps
    .pipe(size({showFiles: true, title: 'browserify', gzip: true})) //no maps
    .pipe(gif(!dev, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.distStatic + '/js'));

}

/* --- tasks --- */

browserifyFiles.forEach(function (n) {

  let name = generateName(n[0]);
  let taskName = 'js-' + name;

  gulp.task(taskName, browserifyHandler.bind(this, n[0], n[1]));

  browserifyTasks.push(taskName);

});

// tip: split it in watch
gulp.task('js', browserifyTasks);

gulp.task('clean', function () {
  return del([paths.dist + '/*']).then(function (delPaths) {
    gutil.log(chalk.blue('Deleted files/folders:'));
    if (!delPaths.length) {
      gutil.log(chalk.gray('- nothing -'));
    }
    delPaths.forEach(function (e) {
      gutil.log(chalk.red('✖ ' + e.split('/').slice(-3).join('/')));
    });
  }).catch(function (err) {
    gutil.log(err);
  });
});

gulp.task('other-copy', function () {
  return gulp.src(src.other)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('pack', function () {
  return gulp.src(paths.dist + '/**/*.*')
    .pipe(zipper(zipName))
    .pipe(gulp.dest(paths.root));
});

gulp.task('watch', function () {

  gulp.watch([src.js, src.tmpl], ['js']);

  gulp.watch(src.other, ['other-copy']);

});

gulp.task('_default', [
  'js',
  'other-copy'
]);

gulp.task('default', [
  'watch',
  '_default'
]);
