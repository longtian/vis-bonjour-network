var argv = require('yargs')
  .usage('Usage: $0 [options]')
  .default('port', 3000)
  .describe('port',"server port")
  .alias('p', 'port')
  .help('help')
  .alias('h', 'help')
  .epilog('copyright 2016')
  .argv;

var WebSocketServer = require('ws').Server;
var express = require('express');
var server = require('http').createServer();
var bonjour = require('bonjour');
var wss = new WebSocketServer({
  server: server
});
var app = express();
var path = require('path');
var services = [];
var os = require('os');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'node_modules', 'vis', 'dist')))
app.use('/static', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')))

app.get('/list.json', function (req, res) {
  res.json(services);
});

app.get('/whoami.json', function (req, res) {
  res.json({
    hostname: os.hostname()
  });
});

bonjour().find(function (service) {

  wss.clients.forEach(function (client) {
    console.log('publish_new_service');

    client.send(JSON.stringify({
      "type": "new_serivce",
      "service": service
    }));
  });
  services.push(service);
});

server.on('request', app);

server.on('listening', function () {
  var port = server.address().port;

  var eth0 = os.networkInterfaces()["eth0"];
  if (eth0) {
    var ipv4Interface = eth0.filter(function (interface) {
      return interface.family == "IPv4"
    })[0];
    if (ipv4Interface) {
      console.log("http://%s:%d", ipv4Interface.address, port);
    }
  }
});

server.listen(argv.port);

process.on('SIGINT', function () {
  process.exit(0)
});

process.on('SIGTERM', function () {
  process.exit(0)
});