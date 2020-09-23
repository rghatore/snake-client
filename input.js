const { connect } = require("./client");
const { keystrokes } = require('./constants');
// stores the active TCP connection object
let connection; // global scope

// the following function sets up input - and returns process.stdin basically
const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);

  return stdin;
}

const handleUserInput = input => {
  input.on('data', (key) => {
  if (key === '\u0003') { // ctrl + c
    process.exit();
  } else if (keystrokes[key]) {
    connection.write(keystrokes[key]);
  }
  });
};

module.exports = { setupInput };