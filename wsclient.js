
console.log("wsclient: entry");

var WebSocket = require('ws');
var ws = new WebSocket('ws://boss0135:8080/websocket/echo');

var i = 0;
 
ws.on('open', function() {
    console.log("wsclient.onopen: entry");
    ws.send('hello!! message #' + (i++));
});
 
ws.on('message', function(data, flags) {
    console.log("wsclient.onmessage: entry: " + data);

    if (i < 10) {
        ws.send('hello!! message #' + (i++));
    } else {
        ws.close();
    }
});

ws.on('close', function() {
    console.log("wsclient.onclose: ");
});


