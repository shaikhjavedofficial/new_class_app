"use strict";
var gulp = require('gulp');
const {
    series,
    parallel
} = require('gulp');
var conn = require('gulp-connect');
const open = require('gulp-open');
// var browserify = require('browserify');
// var reactify = require('reactify');
// var source = require('vinyl-source-stream');

var config = {
    port: 5500,
    baseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
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

gulp.task('open', ['conn'], function () {
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.baseUrl + ":" + config.port + '/'
        }))
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(conn.reload());
});
// exports.build = ('default', series('conn', parallel('html', 'open')));
gulp.task('default', ['html', 'open']);