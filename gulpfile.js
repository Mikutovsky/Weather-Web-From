const gulp = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  htmlmin = require('gulp-htmlmin'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify-es').default;

gulp.task('clean', function () {
  return gulp.src('build', { read: false }).pipe(clean());
});

gulp.task('minhtml', () => {
  return gulp
    .src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'));
});

gulp.task('mincss', function () {
  return gulp
    .src('app/css/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('minjs', function () {
  return (
    gulp
      .src(['app/js/weatherAPI.js', 'app/js/app.js', 'app/js/ui.js'])
      .pipe(concat('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/js/'))
  );
});

gulp.task('build', gulp.parallel('minhtml', 'mincss', 'minjs'))
