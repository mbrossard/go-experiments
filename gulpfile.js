var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var rimraf = require('rimraf');

var config = {
  bowerDir: './bower_components',
  publicDir: './assets'
};

gulp.task('clean', function(cb) {
    rimraf('assets', cb);
});

gulp.task('css', function() {
    return gulp.src('css/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        debug_info: true,
        outputStyle: 'compressed',
        includePaths: [
            config.bowerDir + '/bootstrap-sass/assets/stylesheets',
            config.bowerDir + '/font-awsome/scss',
            './css/theme'
        ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('js', function() {
    return browserify({
        entries: './src/js/main.jsx',
        debug: true
  	})
    .transform("babelify", {presets: ["es2015", "react"]})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('vendor', function() {
    return gulp.src([
        config.bowerDir + '/jquery/dist/jquery.js',
        config.bowerDir + '/jquery-ui/jquery-ui.js',
        config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.bowerDir + '/react/react.js',
        config.bowerDir + '/react/react-dom.js'
    ])
    .pipe(uglify('vendor.bundle.js', {
        compress: false,
        outSourceMap: true
    }))
    .pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('fonts', function() {
  return gulp.src([
    config.bowerDir + '/bootstrap-sass/assets/fonts/**/*',
    config.bowerDir + '/font-awsome/fonts/*'
  ])
  .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('watch', function() {
  gulp.watch('src/css/**/*.scss', ['css']);
  gulp.watch('src/js/**/*.jsx', ['js']);
});

gulp.task('default', ['css', 'js', 'vendor', 'fonts']);
