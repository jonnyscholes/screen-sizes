var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch('src/scss/**', ['styles']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/templates/**', ['jade']);
	// Note: The browserify task handles js recompiling with watchify
});