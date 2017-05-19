var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify');

gulp.task('deleteDistFolder', function() {
	return del("./dist");
});


gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	// ! will exclude any files from the previous path
	return gulp.src('./app/public/assets/images/**/*')
	.pipe(imagemin({
		progressive: true,
		intercaled: true,
		multipass: true
	}))
	.pipe(gulp.dest('./dist/assets/images'));
});


gulp.task('usemin', ['deleteDistFolder'], function() {
	return gulp.src(['./views/index.ejs'])
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest('./dist'));
});

// this build task doesnt actually do anything itself, instead it will call other tasks to run. in the cmd line all we have to type is gulp build though to initiate this. a shortcut. 
gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);

