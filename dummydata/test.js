const { exec } = require('child_process');

const foo = function (cb) {

  let data = "";
  exec('python main.py', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return cb(err);
    }
    console.log(`stdout: ${stdout}`);
    cb(null, { stdout, stderr });
  });

};

foo(function (err, { stdout, stderr }) {
  // check for err first
  // then use stdout/stderr
  console.log("err", err)
  console.log(stdout);
  return stdout;
});
