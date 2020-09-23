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

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = { connect };