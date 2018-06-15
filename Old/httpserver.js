var http=require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
http.createServer(function(req, res){
    var url_req=url.parse(req.url,true)
    var path_file='.'+url_req.path
    fs.stat(path_file,function(err,stats){
        if(err){
            res.writeHead(500)
            res.write('.')
            res.end()
            return
        }
        if(path_file=='./'){
            res.writeHead(200,{'Content-Type':'text/html'})
            fs.createReadStream('./index.html').pipe(res)
            return
        }

        if(stats.isFile()){
            if(path.extname(path_file)==='.css'){
                res.writeHead(200,{'Content-Type':'text/css'})
            }
            if(path.extname(path_file)==='.js'){
                res.writeHead(200,{'Content-Type':'text/javascript'})
            }
            if(path.extname(path_file)==='.html'){
                res.writeHead(200,{'Content-Type':'text/html'})
            }
            fs.createReadStream(path_file).pipe(res)
            return
        }

        else{
            res.writeHead(400)
            res.write('Bad request.')
        }
    })
    console.log(url_req)
}).listen(8080)
