/*
http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
*/
'use strict'
var
    statusname={
        400:'Bad Request',
        403:'Forbidden',
        404:'Not Found',
        500:'Internal Server Error',
    },
    statuscontent={
        400:'The request could not be understood by the server due to malformed syntax.',
        403:'The server understood the request, but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated.',
        404:'The server has not found anything matching the Request-URI.',
        500:'The server encountered an unexpected condition which prevented it from fulfilling the request.'
    }
module.exports=function(request,response,connection,options,callback){
    console.log('response '+options.statuscode+' on '+request.url+'.')
    response.writeHead(options.statuscode,{
        'content-type':'text/html;charset=utf-8'
    })
    response.write(
'<!DOCTYPE html>'+
'<html>'+
'<head>'+
'<title>'+statusname[options.statuscode]+'</title>'+
'<meta name="viewport" content="width=device-width,initial-scale=1">'+
'<link rel="stylesheet" type="text/css" href="/responseerror.css">'+
'</head>'+
'<body>'+
'<h1>'+statusname[options.statuscode]+'</h1>'+
'<p>'+statuscontent[options.statuscode]+''+
'<p>If you think this is a server error, '+
'please contact the <a href="mailto:anlialtting@gmail.com">webmaster</a>.'+
'<h2>Error '+options.statuscode+'</h2>'+
'<p>CKEFGISC ADA2016.'+
'</body>'+
'</html>'
    )
    response.end()
    callback(null)
}
