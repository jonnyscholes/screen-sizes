var gulp = require('gulp');
var jade = require('gulp-jade');
var handleErrors = require('../util/handleErrors');

gulp.task('jade', function() {
	var dest = './build/';

  return gulp.src('./src/templates/layouts/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(dest));
});