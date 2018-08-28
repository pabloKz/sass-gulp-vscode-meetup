const gulp = require("gulp");
const sass = require("gulp-sass");
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task("sass", () => {
    return gulp.src('./sass/*.scss')
        .pipe(sourcemaps.init())
          .pipe(sass().on('error', sass.logError))
          .pipe(concat('all.css'))
          .pipe(uglifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task("default", () => {
  gulp.watch("./sass/*.scss", ["sass"]);
});
