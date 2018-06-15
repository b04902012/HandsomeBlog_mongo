var http=require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var cookie=require('./cookie.js');
http.createServer(function(req, res){
    var url_req=url.parse(req.url,true);
    var list_cookie=url_req.query;
    document.cookie=list_cookie;
    console.log(url_req)

}).listen(8080);