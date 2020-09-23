// the following function sets up input - and returns process.stdin basically
const setupInput = () => {
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
  }
  });
};

module.exports = { setupInput };