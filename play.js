const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();  // function was created so we could import

setupInput(); // this starts the process.stdin where we can get keystrokes as data