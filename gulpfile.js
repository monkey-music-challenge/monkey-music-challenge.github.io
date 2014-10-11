var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    prefixer = require('gulp-autoprefixer')

var paths = {
  scss: 'stylesheets/*.scss',
  css: './css',
}

var buildCSS = function(files) {
  return gulp.src(paths.scss)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(prefixer())
    .pipe(minify({ cache: true }))
    .pipe(gulp.dest(paths.css))
}

gulp.task('css', buildCSS)

gulp.task('default', ['css'])

gulp.task('watch', function() {
  return gulp.watch(paths.scss, ['css'])
})
