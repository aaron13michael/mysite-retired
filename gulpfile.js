var gulp = require('gulp');
var webpack = require('gulp-webpack');
var print = require('gulp-print');

gulp.task('webpack', function(){
    return gulp.src('dev/*.jsx')
    .pipe(print())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function(){
    gulp.watch('dev/*.*', ['webpack']);
});