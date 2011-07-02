//for testing on localhost 
var static = require('node-static');

var file = new(static.Server)('.');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // Serve files!
        file.serve(request, response);
    });
}).listen(8080);
