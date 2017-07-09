var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['sass'],function() {

	browserSync.init({
        server: {
            baseDir: "./"
        }
    });

	gulp.watch(['./**/*.html', './**/*.js']).on('change', browserSync.reload);
    gulp.watch('sass/**/*.scss',['sass']);

});