var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
  // return gulp.src(['lib/**/*.js'])
  return gulp.src(['**/*.js', '!node_modules/**', '!docs/**', '!dist/**'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach()
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failOnError());
});