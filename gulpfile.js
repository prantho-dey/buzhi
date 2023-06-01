const { series, dest, src, watch } = require('gulp')
const twig = require('gulp-twig')
const sourcemap = require('gulp-sourcemaps')
const browsersync = require('browser-sync').create()
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'));
// const postcss = require('gulp-postcss');




// Template engine twig
function templateTask() {
    return src('./src/*.twig')
        .pipe(twig()).pipe(dest('dist'))
}

// SCSS Styles
function styleTask() {
    return src('./src/assets/scss/*.scss')
        .pipe(sourcemap.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemap.write('.'))
        .pipe(dest('dist/assets/css')).pipe(browsersync.stream())
}

// CSS Styles
function cssPluginTask() {
    return src('./src/assets/css/*.css')
        .pipe(concat('plugins.min.css'))
        .pipe(dest('dist/assets/css'))
}
// CSS Styles
function videoTask() {
    return src('./src/assets/video/**')
        .pipe(dest('dist/assets/video'))
}

// Image asssets
function imageTask() {
    return src('./src/assets/img/**')
        .pipe(dest('dist/assets/img'))
}


function jsPluginsTask() {
    return src(['./src/assets/js/plugin/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/assets/js'))
}

function jsDefaultTask(){
    return src(['./src/assets/js/default/*.js'])
        .pipe(concat('diffault.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/assets/js'))
  }

// Custom JS task
function customJsTask() {
    return src('src/assets/js/scripts.js')
        .pipe(dest('dist/assets/js'))
}

// Fonts file
function custonFonts() {
    return src('src/assets/fonts/**')
        .pipe(dest('dist/assets/fonts'))
}

// Live reload browsersync
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    })
    cb()
}

// Watch all files
function watcher() {
    watch('./src/**/*.twig').on("change", series(templateTask, browsersync.reload))
    watch('./src/assets/img/**', imageTask)
    watch('./src/assets/js/default/*.js', jsDefaultTask)
    watch('./src/assets/js/plugin/*.js', jsPluginsTask)
    watch('./src/assets/js/scripts.js', customJsTask)
    watch('./src/assets/css/*.css', cssPluginTask)
    watch('./src/assets/scss/**/*.scss', styleTask)
    watch('./src/assets/fonts/**', custonFonts)
    watch('./src/assets/video/**', videoTask)
}



exports.default = series(
    templateTask,
    styleTask,
    cssPluginTask,
    videoTask,
    imageTask,
    jsDefaultTask,
    jsPluginsTask,
    customJsTask,
    custonFonts,
    browsersyncServe,
    watcher
)