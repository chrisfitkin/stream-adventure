// const fs = require('fs');
// fs.createReadStream(process.argv[2]).pipe(process.stdout);

// process.stdin.pipe(process.stdout);

var through = require('through2');
var stream = through(write, end);
var split = require('split');
var lineCount = 0;

function write(buffer, encoding, next) {
  var response;
  var odd = (lineCount % 2 === 0)
  response = buffer.toString().toLowerCase();
  if (!odd) {
    response = response.toUpperCase();
  }
  this.push(response + '\n');
  lineCount++;
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
