
var restify = require('restify');

var server = restify.createServer();

server.use(restify.fullResponse());
server.use(restify.bodyParser());


var port = 3000;
server.listen(process.env.PORT || port  , function (err) {
    if (err)
        console.error(err)
    else
        console.log('Rest App is ready at : ' + process.env.PORT || port )
});


// Set the routes for the defeault html file
server.get("/", restify.serveStatic({
    'directory': '.',
    'default': 'client.html'
}));



server.get("/demo/getexample", function(req, res) {

    var respRandomValue = Math.floor(Math.random() * 10 + 1) ;
    var respRandomValue2 = Math.floor(Math.random() * 10 + 1) ;
    var respRandomValue3 = Math.floor(Math.random() * 10 + 1) ;
    console.log('request  description: ', respRandomValue); 
    res.json({type: true, data: 'A:'+ respRandomValue+' '+respRandomValue2+' '+respRandomValue3});
});





