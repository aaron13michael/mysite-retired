var gulp = require('gulp');
var webpack = require('gulp-webpack');
var print = require('gulp-print');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

gulp.task('webpack', function(){
    return gulp.src('dev/jsx/*.jsx')
    .pipe(print())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass', function(){
  return gulp.src('dev/sass/app.scss')
  .pipe(print())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('watchjsx', function(){
  return gulp.watch('dev/jsx/*.*', ['webpack']);
});

gulp.task('watchsass', function(){
  return gulp.watch('dev/sass/*.*', ['sass']);
});

gulp.task('default', ['watchjsx', 'watchsass']);
