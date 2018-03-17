var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['styles'], function () {
	gulp.watch('styles/main.css', ['styles']);
});

gulp.task('styles', function () {
	gulp.src('styles/main.css')
	.pipe(autoprefixer())
	.pipe(gulp.dest('build'));
});