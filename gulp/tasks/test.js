var gulp = require('gulp');
// var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('pre-test', function () {
  return gulp.src(['lib/**/*.js'])
    // optionally load existing source maps
    .pipe(sourcemaps.init())
    // Covering files
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(sourcemaps.write('.'))
    // Force `require` to return covered files
    // .pipe(istanbul.hookRequire())
    // Write the covered files to a temporary directory
    .pipe(gulp.dest('tmp/test'));
});

gulp.task('test-lib', ['pre-test'], function () {
  return gulp.src(['test/lib/**/*[Ss]pec.js'])
    .pipe(mocha())
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});
gulp.task('test', ['test-lib']);

// gulp.task('test', function () {
//   return gulp.src(['test/**/*[Ss]pec.js'], {
//     read: true
//   })
//   .pipe(mocha({
//     reporter: 'list'
//   }));
//   // .on('error', gutil.log);
// });
