const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: RG') // sending name to the game server (three character limit)
  })

  // moving the snake up one unit on connect
  // conn.on('connect', () => {
    // conn.write('Move: up');
    // setTimeout(() => conn.write('Move: up'), 1000);
    // setTimeout(() => conn.write('Move: left'),1000);
    // setTimeout(() => conn.write('Move: left'), 1000);
    // setInterval(() => conn.write('Move: right'), 1000);
  // })

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = { connect };