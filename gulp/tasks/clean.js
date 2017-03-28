var gulp = require('gulp');
var del = require('del');

gulp.task('clean', ['clean-dist', 'clean-tmp']);

gulp.task('clean-dist', function () {
  return del([
    'dist'
  ]);
});

gulp.task('clean-tmp', function () {
  return del([
    'tmp'
  ]);
});

gulp.task('clean-osx', function () {
  return del([
    '**/.DS_Store'
  ]);
});
