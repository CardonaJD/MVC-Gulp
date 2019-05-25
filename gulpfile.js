const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('js', function() {
    gulp.src(['src/js/Controllers/*.js', 'src/js/Models/*.js', 'src/js/Views/*.js', 'src/js/*.js'])
      .pipe(concat("app.js"))
      .pipe(minify({
          noSource: true
      }))
      .pipe(gulp.dest('public/js'))
  });

  gulp.task('html', function() {
    gulp.src(['src/html/*.html'])
      .pipe(gulp.dest('public/html'))
  });

  gulp.task('css', function() {
    gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/css'))
  });

  gulp.task('model', function() {
    gulp.src('src/js/*Model.js')
      .pipe(gulp.dest('src/js/Models'))
  });

  gulp.task('view', function() {
    gulp.src('src/js/*View.js')
      .pipe(gulp.dest('src/js/Views'))
  });

  gulp.task('controller', function() {
    gulp.src('src/js/*Controller.js')
      .pipe(gulp.dest('src/js/Controllers'))
  });
