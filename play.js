const { connect } = require('./client');
console.log('Connecting ...');
connect();  // function was created so we could import

// the following function sets up input - and returns process.stdin basically
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    if (key === '\u0003') { // ctrl + c
      process.exit();
    }
  });
  return stdin;
}

setupInput(); // this starts the process.stdin where we can get keystrokes as data and add functions