const fs = require('fs');
const http = require('http');
const ws = require('ws');
const net = require('net');
const wss = new ws.Server({noServer: true});
const clients = new Set();

var DATA = '';

http.createServer((req, res) => {
  fs.readFile("C:/Users/admin/Desktop/test-server/page.html", function (err, data) {
    if (err) {
      console.log("404: HTML file does not exist!");
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("<body style='text-align: center'><h1><b><u>404 Error</u></b></h1><h2>Page not found.  :(</h2></body>");
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }
  });
}).listen(80, "192.168.1.100");

http.createServer((req, res) => {
  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
}).listen(81, "192.168.1.100");

function onSocketConnect(ws) {

  clients.add(ws);
  console.log("+1 Person in document");
  for(let client of clients) {
    client.send(DATA);
  }

  ws.on('message', function(message) {
    DATA = "" + message;
    for(let client of clients) {
      client.send(DATA);
    }
  });

  ws.on('close', function() {
    clients.delete(ws);
    console.log("-1 Person in document");
  });

}
