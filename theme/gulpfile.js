/*
Include node modules
 */
var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    compilecss  = require('gulp-csso'),
    compileless = require('gulp-less'),
    uglify      = require('gulp-uglify'),
    newer       = require('gulp-newer'),
    watch       = require('gulp-watch');

/*
Main Paths
 */

var paths = {
        scripts : ['scripts/js/**/*.js'],
        less    : 'css/_all.less',
        images  : ['images/*.jpg', 'images/*.png', 'images/*.gif', 'images/*.jpeg'],
        fonts   : ['fonts/*.eot', 'fonts/*.svg', 'fonts/*.ttf', 'fonts/*.woff', 'fonts/*.woff2'],
        index   : 'index.html'
    },

    /*
    Destination
     */
    dest = {
        scripts : '../public/scripts/js/lib',
        less    : '../public/css',
        images  : '../public/images',
        fonts   : '../public/fonts',
        index   : '../public'
    };

/*
Build all less files
 */

gulp.task('compileless', function () {
    return gulp.src(paths.less)
        .pipe(compileless())
        .pipe(concat('main.css'))
        .pipe(compilecss())
        .pipe(gulp.dest(dest.less));
});

/*
Move Fonts
 */

gulp.task('fonts', function () {
   return gulp.src(paths.fonts)
       .pipe(gulp.dest(dest.fonts));
});

/*
Move all images
 */

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(newer(dest.images))
        .pipe(gulp.dest(dest.images));
});

/*
Index for public dir
 */

gulp.task('copyindex', function () {
    return gulp.src(paths.index)
        .pipe(newer(dest.index))
        .pipe(gulp.dest(dest.index))
});

/*
Build scripts
 */

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest(dest.scripts));
});

/*
Watcher runs the task again if changed
 */

gulp.task('watch', function() {
    gulp.watch('css/custom.less', ['compileless']);
});


/*
Gulp Task
 */
gulp.task('default', ['watch', 'compileless', 'fonts', 'images', 'scripts', 'copyindex']);

