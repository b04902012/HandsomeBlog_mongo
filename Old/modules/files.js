var
    fs          =require('fs'),
    etag        =require('etag'),
    url         =require('url'),
    path        =require('path'),
    mimetypes   =require('./mimetypes.js')
    files       ={}
module.exports=function(request,response,connection,environment,callback){
    var
        url_request,
        headers,
        etag_file,
        pathToFile
    url_request=url.parse(request.url)
    pathToFile='./files'+url_request.pathname
    if(
        environment.config.useCache===false||
        files[pathToFile]===undefined||
        files[pathToFile].mtime<environment.fileStat.mtime
    ){
        files[pathToFile]={
            mtime:environment.fileStat.mtime,
            etag:
                etag(fs.readFileSync(
                    pathToFile
                ))
        }
    }
    etag_file=files[pathToFile].etag
    headers={
        'last-modified':'Thu, 04 Jun 2015 00:00:00 GMT',
        'content-type':
            mimetypes[
                path.extname(url_request.pathname)
            ]||
            'text/plain',
        'etag':etag_file,
    }
    if(request.headers['if-none-match']!==etag_file){
        response.writeHead(200,headers)
        fs.createReadStream(
            './files'+url_request.pathname
        ).pipe(response)
    }else{
        response.writeHead(304,headers)
        response.end()
    }
    callback(null)
}
