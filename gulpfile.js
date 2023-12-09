import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassModule from 'gulp-sass';
import nodeSass from 'sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';

const sass = sassModule(nodeSass);

gulp.task("server", function () {
    browserSync({
        server: {
            baseDir: "dist",
        },
    });

    gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
    return gulp
        .src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(rename({ suffix: ".min", prefix: "" }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("watch", function () {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
    gulp.watch("src/*.html").on("change", gulp.parallel("html"));
    gulp.watch("src/js/**/*.js").on("change", gulp.parallel("scripts"));
    gulp.watch("src/fonts/**/*").on("all", gulp.parallel("fonts"));
    gulp.watch("src/icons/**/*").on("all", gulp.parallel("icons"));
    gulp.watch("src/img/**/*").on("all", gulp.parallel("images"));
<<<<<<< HEAD
    gulp.watch("src/translations/**/*.json").on("change", gulp.parallel("translations"));
=======
>>>>>>> 8c502bd7f837e16359e196b6fc7de0101f3d1fef
});

gulp.task("html", function () {
    return gulp
        .src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task("scripts", function () {
    return gulp
        .src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task("fonts", function () {
    return gulp
        .src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task("icons", function () {
    return gulp
        .src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task("images", function () {
    return gulp
        .src("src/img/**/*")
<<<<<<< HEAD
        .pipe(imagemin())
=======
>>>>>>> 8c502bd7f837e16359e196b6fc7de0101f3d1fef
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

gulp.task("translations", function() {
    return gulp
<<<<<<< HEAD
        .src('src/translations/**/*.json')
        .pipe(gulp.dest('dist/translations'));
});


=======
        .src("src/translations/**/*.json")
        .pipe(gulp.dest('dist/translations'));
});

>>>>>>> 8c502bd7f837e16359e196b6fc7de0101f3d1fef
gulp.task(
    "default",
    gulp.parallel(
        "watch",
        "server",
        "styles",
        "scripts",
        "fonts",
        "icons",
        "html",
        "images",
        "translations"
    )
);