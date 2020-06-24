const concat = require('gulp-concat');
const del = require('del');
const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const rollup = require('rollup');
const sync = require('browser-sync').create();


// Paths

const paths = {
  build: 'docs/',

  dist: {
    base: 'dist/',
    css: 'dist/css/',
    js: 'dist/js/',
  },

  src: {
    markup: 'dev/pages/*.pug',
    styles: {
      libs: [],
      main: 'dev/assets/less/index.less',
    },
    scripts: {
      libs: [],
      main: 'dev/assets/js/index.js',
    },
    static: 'dev/static/**/*.*',
  },

  watch: {
    markup: [
      'src/**/*.pug',
      'dev/**/*.pug'
    ],
    styles: [
      'src/**/*.less',
      'dev/**/*.less'
    ],
    scripts: [
      'src/**/*.js',
      'dev/**/*.js'
    ],
    static: 'dev/static/**/*.*',
  },
};


// HTML

const html = () => {
  return gulp.src(paths.src.markup)
    .pipe(pug())
    .pipe(gulp.dest(paths.dist.base))
    .pipe(sync.stream());
};

exports.html = html;


// Css

const css = {
  main: () => {
    return gulp.src(paths.src.styles.main)
      .pipe(less())
      .pipe(postcss([
        require('autoprefixer'),
        require('postcss-csso'),
      ]))
      .pipe(rename({
        basename: 'main',
        suffix: '.min',
      }))
      .pipe(gulp.dest(paths.dist.css))
      .pipe(sync.stream());
  }
};

exports.css = css;


// Scripts

const js = {
  main: () => {
    // https://stackoverflow.com/questions/47632435/es6-import-module-with-gulp
    return rollup.rollup({
        input: paths.src.scripts.main,
      }).then(bundle => {
        return bundle.write({
          file: paths.dist.js + 'main.min.js',
          format: 'iife'
        });
      });
  }
};

exports.js = js;


// Static

const static = () => {
  return gulp.src(paths.src.static)
    .pipe(gulp.dest(paths.dist.base))
    .pipe(sync.stream({ once: true }));
};

exports.static = static;


// Clean

const clean = async () => {
  return await del.sync(['dist/**', '!dist'])
};

exports.clean = clean;


// Server

const server = () => {
  sync.init({
    ui: false,
    notify: false,
    server: {
      baseDir: paths.dist.base,
    }
  });
};

exports.server = server;


// Watch

const watch = () => {
  gulp.watch(paths.watch.markup, gulp.series(html));
  gulp.watch(paths.watch.styles, gulp.series(css.main));
  gulp.watch(paths.watch.scripts, gulp.series(js.main));
  gulp.watch(paths.watch.static, gulp.series(static));
};

exports.watch = watch;


// Default

exports.default = gulp.series(
  clean,
  gulp.parallel(
    html,
    css.main,
    js.main,
    static,
  ),
  gulp.parallel(
    watch,
    server,
  ),
);
