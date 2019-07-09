/* 
  koa 和 http 混用写法

*/

const Koa=require('koa');
const Http=require('http')

const app=new Koa();
const server=Http.createServer(app.callback());

app.use( async (ctx)=>{
  ctx.body='hello koa'
})


// app.use()
// server.on()

server.listen(3000,'0.0.0.0');
console.log('Koa 服务器已启动 at 0.0.0.0:3000')