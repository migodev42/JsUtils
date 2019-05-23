const http=require('http');

http.createServer( (request,response)=>{
  // console.log('访问',request);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("<h1>Hello World</h1>");
  response.end();
}).listen(3000, '0.0.0.0');

console.log('node http server is runninng at '+3000)