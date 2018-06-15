'use strict'
var responseerror=require('./responseerror.js')
module.exports=function(request,response,connection,environment,callback){
    return responseerror(request,response,connection,{
        statuscode:404
    },callback)
}
