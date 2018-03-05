var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-clean-css'),
    del = require('del'),
    useref = require('gulp-useref'),
    rename = require('gulp-rename'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;



let config = {
    server: {
        baseDir: "./build"
    },
    // tunnel: true,
    host: 'localhost',
    port: 3000,
    logPrefix: "Keep on going!"
};


gulp.task('webserver', function () {
    browserSync(config);
});



var paths = {
    bundles: {
        js: [
            './node_modules/angular/angular.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/jquery/dist/jquery.js',
            './node_modules/materialize-css/dist/js/materialize.js'
        ]
    },
    js: [
        './app/js/**/*.js',
        './app/src/**/*.js'
    ],
    styles: [
        './app/**/*.+(sass|scss)',
        './node_modules/materialize-css/sass/materialize.scss',
        './node_modules/materialize-css/sass/**/*.scss',
        './node_modules/materialize-css/sass/components/*.scss'
    ],
    html: [
        'index.html',
        './app/**/*.html'
    ]
};

gulp.task('html', function() {
    return gulp.src(paths.html)
        .pipe(useref())
        .pipe(gulp.dest('./build/'))
        .pipe(reload({stream: true}));
});

gulp.task('styles', function () {
    gulp.src(paths.styles)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe(reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('fonts', function() {
    return gulp.src(['node_modules/materialize-css/dist/fonts/roboto/*.{ttf,woff,woff2,eof,svg}'])
        .pipe(gulp.dest("build/fonts/roboto/"))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function () {
    gulp.start('compile');
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.styles, ['styles']);

});

gulp.task('compile', function () {
    // gulp.start('bundle:js');
    // gulp.start('bundle:css');
    gulp.start('styles');
    gulp.start('js');
    gulp.start('html');
    gulp.start('fonts');
    gulp.start('webserver');

});

gulp.task('bundle:js', function() {
    return gulp.src(paths.bundles.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./build/vendor/'));
});

gulp.task('build', ['bundle:js']);



