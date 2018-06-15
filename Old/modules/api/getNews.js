'use strict'
module.exports=function(request,response,connection,environment,callback){
    if(request.method==='GET')
        return get(request,response,connection,environment,callback)
    response.writeHead(405,{'allow':'GET'})
    response.end()
    callback(null)
}
function get(request,response,connection,environment,callback){
    response.writeHead(200,{
        'content-type':'application/json;charset=utf-8',
    })
    response.write(JSON.stringify([
        {
            date:'2015-01-01',
            content:'Meow~',
        },
        {
            date:'2015-07-16',
            content:'建立基本架構。',
        },
        {
            date:'2015-07-17',
            content:'成果發表會。',
        },
        {
            date:'2015-07-18',
            content:'應該是還要再維護一下。',
        },
        {
            date:'2016-01-01',
            content:'Meow, again~',
        },
    ]))
    response.end()
} // get
