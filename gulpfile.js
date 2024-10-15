import {src, dest, watch, series} from 'gulp';  
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function css (done) {
  src('scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css'));
  done();
}

export function dev () {
  watch('scss/**/*.scss', css);
}

export default series(css, dev);