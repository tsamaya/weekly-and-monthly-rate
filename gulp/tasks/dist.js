var gulp = require('gulp');
var processhtml = require('gulp-processhtml');

// prepare ghpages
gulp.task('dist', ['processhtml', 'build']);

gulp.task('copysrc', function () {
  return gulp.src(['public/**', '!public/index.html', '!public/js/main.js'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('processhtml', ['copysrc'], function () {
  return gulp.src('public/index.html')
    .pipe(processhtml())
    .pipe(gulp.dest('./dist/'));
});
