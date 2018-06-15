'use strict'
var
    fs          =require('fs'),
    config      =require('../config.js')
module.exports=function(request,response,connection,environment,callback){
    if(request.method==='GET')
        return get(request,response,connection,environment,callback)
    response.writeHead(405,{'allow':'GET'})
    response.end()
    callback(null)
}
function get(request,response,connection,environment,callback){
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
    })
    fs.createReadStream('./files/contact').pipe(response)
} // get
