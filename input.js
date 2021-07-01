let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
  if (key === 'w') {
    conn.write('Move: up');
  }
  if (key === 'a') {
    conn.write('Move: left');
  }
  if (key === 's') {
    conn.write('Move: down');
  }
  if (key === 'd') {
    conn.write('Move: right');
  }
  if (key === '\u0003') {
    process.exit();
    }
    if (key === 'y') {
      conn.write('Say: Hyo');
      }
    if (key === 'l') {
      conn.write('Say: LOL');
      }


  };
    stdin.on("data",(key) => handleUserInput(key));
  return stdin;
};

module.exports = {setupInput};