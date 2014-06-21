var gulp = require('gulp'),
    swig = require('gulp-swig'),
    uglify = require('gulp-uglifyjs'),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer');

var paths = {
    clean: [
            './Demo/*.*',
            './Scripts/*.*',
            './Styles/*.css',
            './Styles/*.map'
        ],
    styles: ['./Styles/*.scss'],
    sass: ['./Styles/**/*.scss'],
    scripts: [
            './Scripts/Vendor/*.js',
            './Scripts/Modules/*.js'
        ],
    pages: ['./Templates/Pages/*.html']
};

gulp.task('clean', function(){
    return gulp.src(paths.clean, {
            read: false
        })
        .pipe(rimraf());
});

gulp.task('styles', ['clean'], function(){
    return gulp.src(paths.styles)
        .pipe(sass({
            sourcemap: true, // NOTE: Bug https://github.com/sindresorhus/gulp-ruby-sass/issues/17
            style: 'compressed'
        }))
        .pipe(prefix('last 2 versions', '> 1%', 'ff 17', 'opera 12.1'))
        .pipe(gulp.dest('./Styles/'));
});

gulp.task('scripts', ['clean'], function(){
    return gulp.src(paths.scripts)
        .pipe(uglify('app.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('./Scripts/'));
});

gulp.task('pages', ['clean'], function(){
    gulp.src(paths.pages)
        .pipe(swig({
            templatePath: '',
            locals: {}
        }))
        .pipe(gulp.dest('./Demo/'));
});

gulp.task('watch', function(){
    gulp.watch(paths.sass, ['styles']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.pages, ['pages']);
});

gulp.task('default', ['watch', 'styles', 'scripts', 'pages']);