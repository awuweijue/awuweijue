var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compileSass',function(){
	gulp.src(['./src/sass/**/*.scss'])
	.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
	.pipe(gulp.dest('./src/css'));
});
gulp.task('jt',function(){
	gulp.watch('./src/sass/**/*.scss',['compileSass']);
});