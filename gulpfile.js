var gulp = require('gulp');
var sass = require('gulp-sass');

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

gulp.task('default', ['css']);
