const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: '50542' // PORT number here,
  });
    conn.on('connect', function() {
    console.log ('Successfully connected to game server!')
    conn.write('Name: MZ');
    //const directions = ['up', 'right', 'right', 'down', 'left'];
    //setTimeout(() => {conn.write('Move: up')}, 500);
    //setTimeout(() => {conn.write('Move: left')}, 500);
    //setInterval(() => {conn.write('Move: up')}, 1000);

  });

    conn.setEncoding("utf8");
    conn.on('data', function(data) {
      console.log(data); 
    });
    return conn;
};

module.exports = {connect};