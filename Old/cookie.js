var
    url=require('url')
module.exports=function(cookiebody){
    var list
    list={}
    cookiebody&&cookiebody.split(';').forEach(function(cookie){
        var parts
        parts=cookie.split('=')
        list[parts.shift().trim()]=
            decodeURI(
                parts.join('=')
            )
    })
    return list
}