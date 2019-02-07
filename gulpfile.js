const gulp = require('gulp');

const PATHS = {
  src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcCSS: 'src/**/*.css',
  srcJS: 'src/**/*.js',

  build: 'build',
  buildIndex: 'build/index.html',
  buildCSS: 'build/**/*.css',
  buildJS: 'build/**/*.js'
};

gulp.task('html', function () {
  return gulp.src(PATHS.srcHTML).pipe(gulp.dest(PATHS.build));
});

gulp.task('css', function () {
  return gulp.src(PATHS.srcCSS).pipe(gulp.dest(PATHS.build));
});

gulp.task('js', function () {
  return gulp.src(PATHS.srcJS).pipe(gulp.dest(PATHS.build));
});

gulp.task('copy', gulp.series(['html', 'css', 'js']));
