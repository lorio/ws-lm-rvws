var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = 'run-sequence';
var shell = 'gulp-shell';

gulp.task('wintersmith-build', shell.task(['wintersmith build']))

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('build', ['wintersmith-build'], (callback) => {
  runSequence('sass', callback)
})