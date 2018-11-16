const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('default', function () {
    return gulp
            .src('src/scss/styles.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(cleanCSS({compatibility: 'ie11'}))
            .pipe(rename({
                prefix: "vue-",
                suffix: ".min",
                extname: ".css",
                basename: 'chartisan',
            }))
            .pipe(gulp.dest('./dist'));
});