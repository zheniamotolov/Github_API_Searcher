var config = {
	buildFilesFoldersRemove:[
		'build/scss/',
		'build/js/!(*.min.js)',
		//'build/bower.json',
		'bower_components/bootstrap/dist/css/!(*bootstrap.min.css)',
		'build/bower_components/!(*jquery/dist/jquery.min.js)',
		'build/bower_components/!(*bootstrap/dist/js/bootstrap.min.js)',
		'build/bower_components/!(*handlebars/dist/handlebars.min.js)',
		'build/maps/'
	]
};

var gulp = require('gulp'),
	sass = require('gulp-sass'),
    browserSync = require('browser-sync'),

	reload = browserSync.reload,
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
	del = require('del');


function errorlog(err){
	console.error(err.message);
	this.emit('end');
}



gulp.task('scripts', function() {
  return gulp.src('./app/js/*.js')
	.pipe(sourcemaps.init())
		.pipe(concat('temp.js'))
		.pipe(uglify())
		.on('error', errorlog)
		.pipe(rename('app.min.js'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./app/js/'))

    .pipe(reload({stream:true}));
});

gulp.task('styles', function() {
	gulp.src('app/scss/style.scss')
		.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}))
			.on('error', errorlog)
			.pipe(autoprefixer({
	            browsers: ['last 3 versions'],
	            cascade: false
	        }))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('app/css'))
		.pipe(reload({stream:true}));
});



gulp.task('html', function(){
    gulp.src('app/**/*.html')
    .pipe(reload({stream:true}));
});




gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app/"
        }
    });
});


gulp.task('build:serve', function() {
    browserSync({
        server: {
            baseDir: "./build/"
        }
    });
});




// clean out all files and folders from build folder
gulp.task('build:cleanfolder', function (cb) {
	del([
		'build/**'
	], cb);
});


gulp.task('build:copy', ['build:cleanfolder'], function(){
    return gulp.src('app/**/*/')
    .pipe(gulp.dest('build/'));
});


gulp.task('build:remove', ['build:copy'], function (cb) {
	del(config.buildFilesFoldersRemove, cb);
});

gulp.task('build', ['build:copy', 'build:remove']);



gulp.task ('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['styles']);
	gulp.watch('app/js/**/*.js', ['scripts']);
  	gulp.watch('app/**/*.html', ['html']);
});


gulp.task('default', ['scripts', 'styles', 'html', 'browser-sync', 'watch']);
