var gulp = require('gulp');
var del = require('del');

gulp.task('clean', ['clean-dist']);

gulp.task('clean-dist', function () {
  return del([
    'dist'
  ]);
});

gulp.task('clean-osx', function () {
  return del([
    '**/.DS_Store'
  ]);
});
