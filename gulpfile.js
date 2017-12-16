const gulp = require('gulp'),
  runSequence = require('run-sequence'),
  git = require('gulp-git'),
  fs = require('fs'),
  open = require('gulp-open');

  util = require('gulp-util'),
  colors = util.colors;
  bump = require('gulp-bump');



  gulp.task('util', ()=> {
   // console.log(util);
   // util.log(util.colors.strikethrough(['anup']));
    util.log(colors.blue('my Name is anup'))
  })

  gulp.task('uri', function(){
    gulp.src(__filename)
    .pipe(open({uri: 'http://www.google.com'}));
  });



// gulp.task()

gulp.task('git-checkout-development', (cb) => {
  // git.status({ args: '--porcelain' }, (err, status) => {
  //   if (err) throw err;
  //   if (status) throw status;
  // });
  const v = new Date().getTime();
  gulp.src('./**/*')
  //console.log(date.getTime());
  git.checkout('development');
  git.pull('origin', 'development');
  git.checkout('release/release-v' + v, { args: '-b' });
  git.push('origin', { args: '--set-upstream' }, (err) => {
    if (err) throw err;
  });
});

gulp.task('bump-version', function () {
  return gulp.src('./package.json')
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest('./'));
});

gulp.task('branch-status', (cb) => {
  git.status({ args: '--porcelain' }, (err, sts) => {
    if (err) return err;
    if (sts) {
      util.log(colors.red('you have changed files please comitt those changes first \n\n',sts));
    //  var err = new util.PluginError('test', 'something broke', {showStack: true})
      util.log(err);
    }
    return cb();
  });
});
gulp.task('checkout-development', (cb) => {
  git.checkout('development', (err, sts) => {
    if (err) return err;
    return cb();
  });
});

gulp.task('pr', (cb) => {
  git.pull('upstream' ['development', 'master'], function(err){
    console.log(err);
    if (err) return err;
    return cb();
  });
});


gulp.task('pull-development', (cb) => {
  git.pull('origin', 'development', (err, sts) => {
    if (err) return err;
    return cb();
  });
});

gulp.task('commit-changes', (cb) => {
  return gulp.src('./')
    .pipe(git.add({args:'--all'}))
    .pipe(git.commit("release branch", {emitData:true}))
    .on('data',function(data) {
      console.log(data);
    });
})
gulp.task('checkout-release', (cb) => {
  let json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  let version = json.version
  git.checkout('release/release-v' + version, { args: '-b' }, (err, sts) => {
    if (err) return err;
    return cb();
  });
});
gulp.task('push-release', (cb) => {
  git.push('origin', { args: '--set-upstream' }, (err, sts) => {
    if (err) return err;
    return cb();
  });
});

gulp.task('finishVersion', function (callback) {
  runSequence('checkout-development',
    'pull-development',
    'bump-version',
    'checkout-release',
    'commit-changes',
    'push-release', function(err){
      if(err) {console.log(err)}else{
        callback();
      }
    });
})


// var gulp = require('gulp');
// var runSequence = require('run-sequence');
// var git = require('gulp-git');

// var currentVersion = "0.0.1";

// gulp.task('finishVersion', function(callback) { runSequence('doCommit', 'doTag', 'doPush', callback); })

// gulp.task('doCommit', function() {
//   return gulp.src(['./*', '!./Build', '!./node_modules'])
//     .pipe(git.commit('Deployment of ' + currentVersion + '.'));
// });

// gulp.task('doTag', function(cb) {
//   git.tag(currentVersion, 'Version: ' + currentVersion, function (err) {
//     if (err) return cb(err);
//     return cb();
//   });
// });

// gulp.task('doPush', function(cb) {
//   git.push('origin', {args: " --tags"}, function (err) {
//     if (err) return cb(err);
//     cb(err);
//   });
// });
