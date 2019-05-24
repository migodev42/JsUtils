const express=require('express');
const http=require('http');
const ws=require('ws');
const {sleep}=require('../JsSleep.js');

const app=express();
// const server=new http.Server();

const wsServer=new ws.Server({port:3001});

wsServer.on('connection',async function(ws){
  console.log('ws server is running');

  ws.on('message', function(msg){
    console.log('ws server recieve',msg)

    if(msg==='data'){ send20Msg() }else{
      console.log('收到一条消息');
    }
  })

  async function send20Msg(){
    for(let i=1;i<20;i++){      
      ws.send(`这是服务器传来的第 ${i} 消息，nice!`)
      await sleep(3000);
    }
  }
  
  
})



app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000);
console.log('服务已启动')