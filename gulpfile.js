const gulp = require('gulp');
const pug = require('gulp-pug');

const views_src = './src/views/*.pug'

exports.default = () => {
    return gulp.src(views_src)
        .pipe(
            pug({
                // Your options in here.
            })
        )
        .pipe(gulp.dest('./dist'));
};

exports.watch = () => {
    gulp.watch(views_src, gulp.parallel('default'));
}
