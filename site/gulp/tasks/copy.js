var gulp = require('gulp');

gulp.task('copy', function(){
	var dest = './build/data';

  return gulp.src('./src/data/*')
    .pipe(gulp.dest(dest));
});