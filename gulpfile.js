'use strict';

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const csso = require('gulp-csso');
const del = require('del');
const frontMatter = require('gulp-front-matter');
const gulp = require('gulp');
const _if = require('gulp-if');
// const htmlVersion = require('gulp-html-version');
const less = require('gulp-less');
const multipipe = require('multipipe');
const rename = require('gulp-rename');
const sync = require('gulp-sync')(gulp);
const typograf = require('gulp-typograf');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');
const wrap = require('gulp-wrap');

const mode = process.env.NODE_ENV;

const paths = {
	build: 'build/',
	dist: {
		base: 'dist/',
		html: 'dist/',
		img: 'dist/img/',
		css: 'dist/css/',
		js: 'dist/js/'
	},
	dev: {
		base: 'dev/*.*',
		html: {
			layouts: 'dev/html/layouts/default.html',
			pages: 'dev/html/pages/*.html'
		},
		img: 'dev/img/**/*.*',
		css: 'dev/less/main.less',
		js: 'dev/js/main.js'
	},
	watch: {
		html: [
			'dev/**/*.html',
			'src/**/*.html'
		],
		css: [
			'dev/**/*.less',
			'src/**/*.less'
		],
		js: [
			'dev/**/*.js',
			'src/**/*.js'
		]
	}
};

gulp.task('default', sync.sync(['clean:dist', 'base', 'html', 'img', 'css', 'js']));

gulp.task('base', function() {
	return multipipe(
		gulp.src(paths.dev.base),
		gulp.dest(paths.dist.base)
	);
});

gulp.task('html', function() {
	return multipipe(
		gulp.src(paths.dev.html.pages),
		frontMatter({ property: 'data' }),
		wrap(
			{ src: paths.dev.html.layouts },
			{ variable: 'data' }
		),
		// htmlVersion({
		// 	paramType: 'timestamp',
		// 	suffix: ['css', 'js', 'jpg', 'png', 'svg']
		// }),
		typograf({
			locale: ['ru', 'en-US'],
			htmlEntity: { type: 'default' },
			enableRule: ['common/nbsp/afterNumber'],
			disableRule: ['common/space/replaceTab'],
			processingSeparateParts: false
		}),
		gulp.dest(paths.dist.html),
		browserSync.stream()
	);
});

gulp.task('img', function() {
	return multipipe(
		gulp.src(paths.dev.img),
		gulp.dest(paths.dist.img)
	);
});

gulp.task('css', function() {
	return multipipe(
		gulp.src(paths.dev.css),
		less(),
		autoprefixer({ browsers: ['last 2 version', 'ie >= 11'] }),
		_if(mode === 'production', csso()),
		_if(mode === 'production', rename({ suffix: '.min' })),
		gulp.dest(paths.dist.css),
		browserSync.stream()
	);
});

gulp.task('js', function() {
	return multipipe(
		gulp.src(paths.dev.js),
		webpack({
			mode: mode,
			output: { filename: '[name].js' }
		}),
		babel({ presets: ['@babel/env'] }),
		_if(mode === 'production', uglify()),
		_if(mode === 'production', rename({ suffix: '.min' })),
		gulp.dest(paths.dist.js),
		browserSync.stream()
	);
});

gulp.task('build', ['clean:build', 'default'], function() {
	return multipipe(
		gulp.src(paths.dist.base + '**'),
		gulp.dest(paths.build)
	);
});

gulp.task('watch', ['default'], function() {
	browserSync.init({
		server: { baseDir: paths.dist.base },
		notify: false
	});

	gulp.watch(paths.watch.html, ['html']);
	gulp.watch(paths.watch.css, ['css']);
	gulp.watch(paths.watch.js, ['js']);
});

gulp.task('clean:dist', function() {
	return del.sync(['dist/**', '!dist']);
});

gulp.task('clean:build', function() {
	return del.sync(['build/**', '!build']);
});
