const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: '50542' // PORT number here,
  });
  // show the connect information to user once the connection is successfully made. 
  conn.on('connect', function() {
    console.log ('Successfully connected to game server!')
  //write/sending an userName to server;  
  conn.write('Name: MZ');
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', function(data) {
    console.log(data); 
  });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;
