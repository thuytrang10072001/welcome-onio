const gulp = require('gulp');
const sass = require("gulp-sass")(require('sass'));
const pug = require('gulp-pug');
const cache = require("gulp-cache");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");

var listPug = [
  'src/*.pug',
  'src/index.pug',
];
gulp.task('views', function () {
  return gulp
    .src([...listPug, '!src/layout.pug'])
    .pipe(
      pug({
        pretty: true,
      }),
    )
    
    .pipe(gulp.dest('pub'));
});
gulp.task('view-all', function () {
  return gulp
    .src(['src/*.pug', '!src/layout.pug'])
    .pipe(
      pug({
        pretty: true,
      }),
    )
    
    .pipe(gulp.dest('pub'));
});
gulp.task('sass', function() {
  return gulp
    .src(['src/assets/scss/**/*.scss', '!src/assets/scss/includes/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./pub/assets/css'))

});
gulp.task('sass-min', function() {
  return gulp
    .src(['src/assets/scss/**/*.scss', '!src/assets/scss/includes/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin()) //minify css
    .pipe(rename({
      suffix: '.min'
    })) //change name
    .pipe(gulp.dest('./pub/assets/css'));
});
gulp.task('libs', function() {
  return gulp
    .src(['src/assets/libs/**/*'])
    .pipe(gulp.dest('./pub/assets/libs'));
});
gulp.task('images', function() {
  return gulp
    .src("src/assets/images/**/*.+(png|jpg|jpeg|gif|svg|ico)")
    .pipe(
      cache(
        imagemin({
          interlaced: true,
        })
      )
    )
    .pipe(gulp.dest("pub/assets/images"));
});
gulp.task('js', function() {
  return gulp
    .src(['src/assets/js/**/*.js'])
    .pipe(gulp.dest('./pub/assets/js'));
});
gulp.task('fonts', function() {
  return gulp
    .src(['src/assets/fonts/**/*'])
    .pipe(gulp.dest('./pub/assets/fonts'));
});
function watchFiles() {
  gulp.watch('src/**/*.pug', gulp.series('views'), function(done) {
    browserSync.reload();
    done();
  })
  gulp.watch('src/assets/js/**/*', gulp.series('js'), function(done) {
    browserSync.reload();
    done();
  })
  gulp.watch('src/assets/libs/**/*', gulp.series('libs'))
  gulp.watch('src/assets/scss/**/*', gulp.series('sass'), function(done) {
    browserSync.reload();
    done();
  })
  gulp.watch('src/assets/fonts/**/*', gulp.series('fonts'))
  gulp.watch('src/assets/images/**/*', gulp.series('images'))
}
gulp.task(
  'watch', 
  gulp.series("sass", "views", "libs", "js", "images", "fonts", watchFiles)
);

gulp.task(
  'build', 
  gulp.series("sass", "views", "libs", "js", "images", "fonts")
);

