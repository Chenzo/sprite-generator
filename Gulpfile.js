var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');



gulp.task('sprite', function () {
  var spriteData = gulp.src('./src/images/*.png').pipe(spritesmith({
  	retinaSrcFilter: ['./src/images/*@2x.png'],
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    retinaImgName: 'sprite@2x.png',
    padding: 4
  }));
  return spriteData.pipe(gulp.dest('./dist/'));
});


