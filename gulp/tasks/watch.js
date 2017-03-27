var gulp = require('gulp');

gulp.task('watch', function () {
  return gulp.watch(['./lib/**/*.js', './test/**/*.js'], ['build']);
});
