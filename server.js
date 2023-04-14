"use strict";
var fs = require('fs');
var http = require ('http');
var url = require('url');

function readFile(response, file) {
    fs.readFile(file, function (err, data) {
        response.end(data);
    });
}



var callback= function (request, response) {

    response.writeHead(200, {"Content-type":"views/index.html; charset=utf-8"})
   var parts = url.parse(request.url);
   var path = parts.path;

   if(parts.path =="/views/index.html"){
        readFile(response,"/index.html");
   } else if (parts.path == "/views/contato.html"){
        response.end("/contato.html")
   } else if (parts.path == "views/catologo.html"){
        response.end("/catalogo.html")
   } else if (parts.path == "views/produto.html"){
        response.end("/produto.html")
   } else {
        response.end("views/404.html" + parts.path == "/404.html")
   }

};

var server = http.createServer(callback);


server.listen(3000);
console.log("Servidor iniciado em http:\\localhost:3000/");
