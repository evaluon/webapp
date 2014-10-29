var gulp = require('gulp'),
connect = require('gulp-connect'),
jshint = require('gulp-jshint'),
historyApiFallback = require('connect-history-api-fallback'),
inject = require('gulp-inject'),
wiredep = require('wiredep').stream,
templateCache = require('gulp-angular-templatecache'),
gulpif = require('gulp-if'),
minifyCss = require('gulp-minify-css'),
useref = require('gulp-useref'),
uglify = require('gulp-uglify'),
uncss = require('gulp-uncss');

gulp.task('webserver', function(){
    connect.server({
        root:'./app',
        hostname: 'localhost',
        port: 3000,
        liveReload: true,
        middleware: function(connect, opt) {
            return [ historyApiFallback ];
        }
    });
});

gulp.task('dist-server', function(){
   connect.server({
            root: './dist',
            hostname: 'localhost',
            port: 3002,
            liveReload: true,
            middleware: function(connect, opt) {
               return [historyApiFallback];
            }
         });
});

gulp.task('android-server', function(){
   connect.server({
            root: '../android/assets/www/',
            hostname: 'localhost',
            port: 3004,
            liveReload: true,
            middleware: function(connect, opt) {
               return [historyApiFallback];
            }
         });
});

gulp.task('ios-server', function(){
   connect.server({
            root: '../iOs/www/',
            hostname: 'localhost',
            port: 3004,
            liveReload: true,
            middleware: function(connect, opt) {
               return [historyApiFallback];
            }
         });
});

gulp.task('inject', function() {
   var sources = gulp.src(['./app/js/**/*.js','./app/styles/**/*.css']);
   return gulp.src('index.html', {cwd: './app'})
     .pipe(inject(sources, {
        read: false,
        ignorePath: '/app'
     }))
     .pipe(gulp.dest('./app'));
 });

 gulp.task('wiredep', function () {
   gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './app/lib'
   }))
    .pipe(gulp.dest('./app'));
 });

gulp.task('reload', function(){
    gulp.src('./app/**/*.{html,js,css}')
        .pipe(connect.reload());
});

gulp.task('jshint', function(){
    return gulp.src('./app/js/**/*.js')
                .pipe(jshint('.jshintrc'))
                .pipe(jshint.reporter('jshint-stylish'))
                .pipe(jshint.reporter('fail'));
});

gulp.task('templates', function(){
   gulp.src('./app/views/**/*.tpl.html')
   .pipe(templateCache({
         root: 'views/',
         module: 'app.templates',
         standalone: true
   }))
   .pipe(gulp.dest('./app/js'));
});

gulp.task('compress', function(){
   gulp.src('./app/index.html')
      .pipe(useref.assets())
      .pipe(gulpif('*.js', uglify({mangle: false})))
      .pipe(gulpif('*.css', minifyCss()))
      .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function(){
   gulp.src('./app/index.html')
      .pipe(useref())
      .pipe(gulp.dest('./dist'));
   gulp.src('./app/lib/ionic/fonts/**')
      .pipe(gulp.dest('./dist/fonts/'));
   gulp.src('./app/img/**')
      .pipe(gulp.dest('./dist/img/'));
});

gulp.task('copy-mobile', function(){
   gulp.src('./dist/**')
      .pipe(gulp.dest('../iOs/www/'));
   gulp.src('./dist/**')
      .pipe(gulp.dest('../android/assets/www/'));
});

gulp.task('uncss', function(){
   gulp.src('./dist/styles/style.min.css')
      .pipe(uncss({
         html: ['./app/index.html', './app/views/**/*.tpl.html']
      }))
      .pipe(gulp.dest('./dist/styles'));
});

gulp.task('watch', function(){
    gulp.watch(['./app/**/*.{html,js,css}'], ['reload']);
    gulp.watch(['./app/js/**/*.js'], ['jshint']);
    gulp.watch(['./bower.json'], ['wiredep']);
    gulp.watch(['./app/views/**/*.tpl.html'], ['templates']);
});

gulp.task('default', ['webserver', 'dist-server', 'inject', /*'wiredep',*/ 'watch']);
gulp.task('build', ['templates', 'compress', 'copy', 'copy-mobile']);
