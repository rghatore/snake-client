const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: RG') // sending name to the game server (three character limit)
  })

  conn.on('data', (data) => {
    console.log(data);
    console.log('press any playable key or "ctrl + c" to exit')
  })

  return conn;
}

module.exports = { connect };