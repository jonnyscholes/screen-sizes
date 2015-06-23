var gulp = require('gulp');

gulp.task('build', ['browserify', 'copy', 'jade', 'styles', 'images']);
