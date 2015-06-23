var sass         = require('gulp-sass');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
	var dest = './build/css/';

	return gulp.src('./src/scss/main.scss')
		.pipe(sass({
      outputStyle: 'expanded',
      errLogToConsole: true
    })).on('error', handleErrors)
		.pipe(gulp.dest(dest));
});