/* 
  参考
  https://www.cnblogs.com/lalalagq/p/9898695.html
*/

const Koa = require('koa');
const fs=require('fs');
const ws=require('ws');
const {sleep}=require('../JsSleep.js');



const app= new Koa();
app.use(async(ctx,next)=>{
  await next()
  ctx.type='html';
  ctx.status=200;
  ctx.body=await fs.readFileSync(__dirname +'/index.html','utf8')
})

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


app.listen(3000);



const wsServer=new ws.Server({port:3001});

wsServer.on('connection',async (ws)=>{
  console.log('ws server，服务已启动');
  ws.on('message', async (msg)=>{  
    let signal;
    try{
      signal =JSON.parse(msg).signal;
    }catch(e){
      signal=undefined;
    }
    

    if(signal==='data'){       
      send20Msg(ws); 
      console.log('ws server，收到数据任务：',signal)
    }else{
      console.log('ws server，收到一条消息', msg);
    }
  })

  ws.on('close', async (msg)=>{
    console.log('ws server，断开某个websocket连接',msg);
  })
})

async function send20Msg(ws){
  for(let i=1;i<20;i++){      
    ws.send(`这是服务器传来的第 ${i} 消息，nice!`)
    await sleep(3000);
  }
}

console.log('server is running at 3000，\nws server is running at 3001');