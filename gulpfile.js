var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested');

gulp.task('html', function() {
	console.log('osfmowafm');
});

// postCSS filter
gulp.task('styles', function() {
	return gulp.src('./app/public/assets/styles/styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/public/temp/styles'));
});


gulp.task('watch', function() {
	// changes in our html
	watch('./app/public/index.html', function() {
		gulp.start('html');
	});

	// changes in ANY css file
	watch('./app/public/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});
