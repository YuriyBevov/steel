const gulp = require("gulp");
const plumber = require("gulp-plumber"); // ловим ошибки
const del = require("del");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

// Html

const pug = require("gulp-pug");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");

// Css

const sass = require("gulp-sass");
// const less = require("gulp-less");
// const stulys = require("gulp-stylus");
const csso = require("gulp-csso");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemap = require("gulp-sourcemaps");

// Img

const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");

// Js

const webpack = require("webpack-stream");

// Server

const sync = require("browser-sync").create();

// clear files

const clean = () => {
  return del("build");
}

exports.clean = clean;

// copy static files

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/*.ico"
    ], {
      base: "source"
    })
  .pipe(gulp.dest("build"));
}

exports.copy = copy;

// html

const html = buildHTML => {
  return gulp.src("source/pug/*.pug")
  .pipe(plumber())
  .pipe(pug({
    pretty: true
  }))
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"));
}

exports.html = html

// styles

const styles = () => {
  return gulp.src("source/styles/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

// scripts

const js = () => {
  return gulp.src('source/scripts/index.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('build/'));
};

exports.js = js;

// server

const server = () => {
  sync.init({
      ui: false,
      notify: false,
      server: {
          baseDir: 'build'
      }
  });
};

exports.server = server;

// watch to change

const watch = () => {
  gulp.watch("source/styles/**/*.{scss,sass}", gulp.series("styles", "refresh"));
  gulp.watch("source/img/icons/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/pug/**/**/**/*.pug", gulp.series("html", "refresh"));
  gulp.watch("source/scripts/**/**/*.js", gulp.series("js", "refresh"));
  gulp.watch("source/scripts/**/**/*.vue", gulp.series("js", "refresh"));
};

exports.watch = watch;

// refresh server

const refresh = (done) => {
  sync.reload();
  done();
}

exports.refresh = refresh;

// --- image optimization and svg-sprite --- //

const imgOpt = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest("source/img"));
}

exports.imgOpt = imgOpt;

const lqip = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(imagemin([
      imagemin.mozjpeg({quality: 6, progressive: true}),
  ]))
  .pipe(gulp.dest("source/img/lqip"));
}

exports.lqip = lqip;

// Webp

const toWebp = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
}

exports.toWebp = toWebp;

// create svg-sprite

const sprite = () => {
  return gulp.src("source/img/icons/{icon-*,htmlacademy*}.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite_auto.svg"))
    .pipe(gulp.dest("source/img"));
}

exports.sprite = sprite;

// gulp start

exports.start = gulp.series(
  clean,
  gulp.parallel(
      html,
      styles,
      js,
      copy,
  ),
  gulp.parallel(
      watch,
      server,
  ),
);

// gulp build

exports.build = gulp.series(
  clean,
  gulp.parallel(
      html,
      styles,
      js,
      copy,
  )
);
