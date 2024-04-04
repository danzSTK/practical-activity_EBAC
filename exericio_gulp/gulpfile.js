const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sorucemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obsfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sorucemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sorucemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
};

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obsfuscate())
        .pipe(gulp.dest('./build/scripts'))
};

function comprimeImagem(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false} , gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false} , gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*',{ignoreInitial: false} , gulp.series(comprimeImagem));
}
