var net_server = require('net');
var app = require("express")();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var request = require('request');
var fs = require("fs");


var server = net_server.createServer(function(client) {

    console.log('Client connection: ');
    console.log('   local = %s:%s', client.localAddress, client.localPort);
    console.log('   remote = %s:%s', client.remoteAddress, client.remotePort);

    client.setEncoding('utf8');

    client.on('data', function(data) {
        console.log('Received data from client on port %d: %s', client.remotePort, (data));
        console.log('여기가 데이터'+data);
        temp = "[" + data + "]";
        console.log(temp);
        fs.writeFileSync("test.json",temp);

        //request.post( 'http://52.14.131.213:8080',{ json : { key : "Hthrt"}},function (error, response, body) {
         //if (!error && response.statusCode == 200) {
        //     console.log(response);

         //console.log("Success");
         //}
          //console.log("failed");


        writeData(client, 'Sending: ' + data.Age);
        console.log('  Bytes sent: ' + client.bytesWritten);
    });

    client.on('end', function() {
        console.log('Client disconnected');
    });

    client.on('error', function(err) {
        console.log('Socket Error: ', JSON.stringify(err));
    });

    client.on('timeout', function() {
        console.log('Socket Timed out');
    });
});

server.listen(25567, function() {
    console.log('Server listening: ' + JSON.stringify(server.address()));
    server.on('close', function(){
        console.log('Server Terminated');
    });
    server.on('error', function(err){
        console.log('Server Error: ', JSON.stringify(err));
    });
});

function writeData(socket, data){
  var success = socket.write(data);
  if (!success){
    console.log("Client Send Fail");
  }
  else{
    console.log("donedonedone!");
  }
