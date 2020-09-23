const { connect } = require("./client");

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
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'q') {
    connection.write('Say: helloo');
  } else if (key === 'e') {
    connection.write('Say: moveee');
  }
  });
};

module.exports = { setupInput };