var gulp = require("gulp"),
deploy = require('gulp-gh-pages'),
htmlmin = require("gulp-htmlmin"),
connect = require("gulp-connect");


/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
      .pipe(deploy())
  });