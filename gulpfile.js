var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglifyjs');

var config = {
  bowerDir: './bower_components',
  publicDir: './assets'
};

gulp.task('css', function() {
  return gulp.src('css/style.scss')
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: [config.bowerDir + '/bootstrap-sass/assets/stylesheets']
  }))
  .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('js', function() {
  return gulp.src([
    config.bowerDir + '/jquery/dist/jquery.min.js',
    config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js'
  ])
  .pipe(uglify('app.js', {
    compress: false,
    outSourceMap: true
  }))
  .pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('fonts', function() {
  return gulp.src([
    config.bowerDir + '/bootstrap-sass/assets/fonts/**/*'
  ])
  .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', ['css', 'js', 'fonts']);
