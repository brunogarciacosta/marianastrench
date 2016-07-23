var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cleanCSS = require('gulp-clean-css');
var deploy = require('gulp-deploy-git');


gulp.task('sass', function() {
  return gulp.src('dev/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dev/css'))
})

gulp.task('jsmin', function () {
  return gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('cssmin', function () {
  return gulp.src('dev/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});


gulp.task('images', function(){
  return gulp.src('dev/img/**/*.+(png|jpg|gif|svg)')
  .pipe(gulp.dest('dist/img'))
});

gulp.task('html', function(){
  return gulp.src('dev/*.html')
  .pipe(gulp.dest('dist'))
});




gulp.task('watch', function(){
  gulp.watch('dev/sass/**/*.sass', ['sass']);
})

gulp.task('build', [`sass`, `images`, `html`, `jsmin`, `cssmin`], function (){
  console.log('Construindo dist');
})

gulp.task('deploy', function(){
  return gulp.src('dist/**/*')
    .pipe(deploy({
      repository: 'https://github.com/brunogarciacosta/marianastrench.git',
      branches:   ['gh-pages']
    }));
});
