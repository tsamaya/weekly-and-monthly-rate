var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var pump = require('pump');

gulp.task('jsbuild', ['jsuglify']);

// var sourcemaps = require('gulp-sourcemaps');

// var minify = function (sources, destination) {
//   return gulp.src(sources)
//     .pipe(sourcemaps.init())
//     .pipe(gulp.dest('dist/js'))
//     .pipe(rename(destination))
//     .pipe(uglify({
//       outSourceMap: true,
//       preserveComments: 'license'
//     }))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('dist/js'));
// };

gulp.task('jsconcat', function () {
  return gulp.src(['public/js/main.js', 'lib/pw-pcm-converter.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./tmp/js'));
});

gulp.task('jsuglify', ['jsconcat'], function (cb) {
  pump([
    gulp.src('tmp/js/*.js'),
    rename('app.min.js'),
    uglify(),
    gulp.dest('dist/js')
  ], cb);
});
