var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('server', function(next) {
  var connect = require('connect'),
      server = connect();
  server.use(connect.static(__dirname)).listen(process.env.PORT || 8000, next);
});

gulp.task('watch', ['server'], function() {
  var server = livereload();
  gulp.watch(__dirname + '/**').on('change', function(file) {
      server.changed(file.path);
  });
});

gulp.task('default', ['watch']);
