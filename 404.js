var fs=require('fs')
module.exports=function(pool,req,res){
    res.writeHead(404)
	res=`
		<!DOCTYPE html>
		<html>
		<head>
		<meta http-equiv="Content-Type" content="text/html" charset="uft-8">
		<title>Not Found</title>
		</head>
		<body>
		<h1>Not Found</h1>
		</body>
		</html>
	`
	res.end()
}
