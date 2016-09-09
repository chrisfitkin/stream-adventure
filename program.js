// const fs = require('fs');
// fs.createReadStream(process.argv[2]).pipe(process.stdout);

// process.stdin.pipe(process.stdout);

var through = require('through2');
var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
