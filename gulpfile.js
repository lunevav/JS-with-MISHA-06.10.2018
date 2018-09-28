const gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
    connect.server({
      root: 'css', // served place // type FOLDER
      livereload: true
    });
  });

gulp.task('sass', function () {
    return gulp.src('./project/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
   
  gulp.task('livereload', function (){
    gulp.src('./css/**/*')
    .pipe(connect.reload());
  });

  gulp.task('watch', function () {
    gulp.watch('./project/*.scss', ['sass']);
    gulp.watch('./css/**/*', ['livereload']);
  });

  gulp.task('default', ['connect', 'watch', 'sass']);
