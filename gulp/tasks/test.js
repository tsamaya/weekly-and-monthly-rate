var gulp = require('gulp');
// var gutil = require('gulp-util');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
  return gulp.src(['test/**/*[Ss]pec.js'], {
    read: true
  })
  .pipe(mocha({
    reporter: 'list'
  }));
  // .on('error', gutil.log);
});
