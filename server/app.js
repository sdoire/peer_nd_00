/**
 * Created by sarahdoire on 7/28/15.
 */
var http = require('http');
var final = require('./final');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(final.output());
    response.write(final.conversion(100, 1000000));
    response.end();
}).listen(3000);

console.log("Listening on port 3000!");