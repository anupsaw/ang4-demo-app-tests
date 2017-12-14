const gulp = require('gulp'),
  runSequence = require('run-sequence'),
  git = require('gulp-git'),
  fs = require('fs'),
  bump = require('gulp-bump');

var execSync = require('child_process').execSync;

var currentVersion = "0.0.1";

gulp.task('bump-version', function () {
  return gulp.src('./package.json')
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest('./'));
});
gulp.task(
  'rename-branch',
  function (cb) {
    const version = getPackageJsonVersion();
    console.log('running rename branch')
    execSync("git branch -m release/release-v" + version);
    return cb();
  }
);




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
    if (sts) console.error(sts); return;
    return cb();
  });
});
gulp.task('checkout-development', (cb) => {
  git.checkout('development', (err, sts) => {
    console.log('checkout-development running')
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
    .pipe(git.add({ args: '--all' }))
    .pipe(git.commit("release branch", { emitData: true }))
    .on('data', function (data) {
      console.log(data);
    });
})
gulp.task('checkout-release', (cb) => {
  const version = getPackageJsonVersion();
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
    'checkout-release',
    'bump-version',
    'rename-branch',
    'commit-changes',
    'push-release', function (err) {
      if (err) { console.log(err) } else {
        callback();
      }
    });
})

function getPackageJsonVersion() {
  let json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  return json.version;
}



