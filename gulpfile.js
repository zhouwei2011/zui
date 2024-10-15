var gulp = require('gulp')
var flatten = require('gulp-flatten')
var rename = require('gulp-rename')

gulp.task('copyVueCode', async done => {
    gulp.src('examples/*/*.vue').pipe(flatten()).pipe(gulp.dest('docs/.vuepress/components/'))

    gulp.src('src/style/common/variable.scss').pipe(flatten()).pipe(rename('palette.scss')).pipe(gulp.dest('docs/.vuepress/styles/'))

    gulp.src('src/style/common/var.scss').pipe(flatten()).pipe(gulp.dest('docs/.vuepress/styles/'))

    done()
})
