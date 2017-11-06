var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(plugins.clean());
});

gulp.task('build', function () {
    return gulp.src('src/**/*.ts')
        .pipe(plugins.typescript({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(gulp.dest('build/'));
});

// Static Server + watching scss/html files
gulp.task('server', function() {
        browserSync.init({
            server: "./"
        });
        gulp.watch("src/*.ts", ['build']).on('change', browserSync.reload);
        gulp.watch("src/*.html").on('change', browserSync.reload);
    });
    

gulp.task('default',['clean','build']);