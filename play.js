const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let conn = connect();  // function was created so we could import

setupInput(conn); // this starts the process.stdin where we can get keystrokes as data