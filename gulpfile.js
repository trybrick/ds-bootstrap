var util = require('gulp-util');
var gulp = require('gulp');
var s3 = require('gulp-s3-upload')({
  userIAM: true
});
var branch = util.env.branch;

gulp.task("default", function() {
  gulp.src("./asset/**")
    .pipe(s3({
      Bucket: 'brick-web', //  Required
      ACL: 'public-read', //  Needs to be user-defined
      keyTransform: function(relative_filename) {
        var new_name = `/ds/${branch}/asset/${relative_filename}`;

        // console.log(new_name);
        // or do whatever you want
        return new_name;
      }
    }, {
      // S3 Construcor Options, ie:
      maxRetries: 5
    }))
  ;
});
