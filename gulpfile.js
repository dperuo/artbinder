(function() {
'use strict';


var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    sass   = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify');



// --------------- PATHS --------------- //
var inputs = {
  img:  'src/img/**/*',
  scss: 'src/scss/**/*.scss',
  js:   'src/js/**/*.js'
};

var outputs = {
  css: 'app/css',
  img: 'app/img',
  js:  'app/js'
};



// --------------- TASKS --------------- //
gulp.task('scss', scssFn);
gulp.task('js', jsFn);
gulp.task('default', defaultFn);



// --------------- TASK FUNCTIONS --------------- //
function scssFn() {
  gulp.src(inputs.scss)
      // .pipe(sass({style: 'compressed', noCache: true}))
      .pipe(sass({style: 'compressed'}))
      .on('error', errorFn)
      .pipe(gulp.dest(outputs.css));
}

function jsFn() {
  gulp.src(inputs.js)
      .pipe(uglify())
      .on('error', errorFn)
      .pipe(gulp.dest(outputs.js));
}

function defaultFn() {
  gutil.log(gutil.colors.yellow('Watching...'));
  gulp.watch(inputs.js, ['js']);
  gulp.watch(inputs.scss, ['scss']);
}



// --------------- ERROR HANDLING --------------- //
function errorFn (error) {
  gutil.beep();
  throw error;
}
})(); // IIFE
