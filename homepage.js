var url=require('url')
var fs=require('fs')
module.exports=function(req,res){
    console.log('homepage')
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.createReadStream('./data/home.html').pipe(res)
}
