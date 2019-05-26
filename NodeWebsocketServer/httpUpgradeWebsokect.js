const http=require('http');
const fs= require('fs');
const crypto=require('crypto');

const server=http.createServer( async (req,res)=>{
  res.writeHead(200, {'Content-Type': 'html'})
  const html =await fs.readFileSync(__dirname+'/upgradeWs.html');
  // res.write('<h1>http upgrade to websocket</h1>');
  res.write(html);
  res.end();

  handleWebsocket(req);
})

server.listen(3000,'localhost');

async function handleWebsocket(req){
  if(req.url='/switchToWs'){
    console.log(req);
  }

}

server.on('upgrade',async (req,socket,upgradeHead)=>{
  console.log('ws',req,socket,upgradeHead);
  
  const head=Buffer.alloc(upgradeHead.length);
  upgradeHead.copy(head);

  let key =req.headers['sec-websocket-key'];
  const shasum=crypto.createHash('sha1');
  key=shasum.update(key+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest('base64');

  const headers=[
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    'Sec-WebSocket-Accept: '+key,
    // 'Sec-WebSocket-Protocol: chat'
  ]
  socket.setNoDelay(true);
  socket.write(headers.concat('','').join('\r\n'));
  // socket.write格式：每个header都以 \r\n 结尾，并且最后加上额外一行 \r\n
  // 回应的Http状态码只在握手阶段使用，握手完成后采用 ws 协议规定的状态码


  // 此时的socket即为建立的 websocket连接对象
  // socket.on('data',function(){})

})

console.log('http server is running at 3000');