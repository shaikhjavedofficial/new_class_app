"use strict";
var gulp = require('gulp');
const {
    series,
    parallel
} = require('gulp');
var conn = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

var config = {
    port: 5500,
    baseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js*',
        images: './src/images/*.png',
        indexJs: './src/index.js',
        css: ['./node_modules/bootstrap/dist/css/bootstrap.min.css',
            './src/css/*.css'
        ],
        dist: './dist',
    }
};

gulp.task('conn', function () {
    conn.server({
        root: ['dist'],
        port: config.port,
        baseUrl: config.baseUrl,
        livereload: true
    });
});

gulp.task('open', series('conn', function () {
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.baseUrl + ":" + config.port + '/'
        }))
}));

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(conn.reload());
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(conn.reload());

    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
})

gulp.task('js', function () {
    browserify(config.paths.indexJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(conn.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({
            config: '.eslintrc.json'
        }))
        .pipe(lint.format());
})

gulp.task('watch', function () {
    gulp.watch(config.paths.html, gulp.series('html'));
    gulp.watch(config.paths.js, gulp.series('js'));
})

gulp.task('default', parallel('html', 'js', 'css', 'open', 'watch', 'lint'));