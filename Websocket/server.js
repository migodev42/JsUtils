/* 
  参考
  https://www.cnblogs.com/lalalagq/p/9898695.html
*/

const Koa = require('koa');
const app= new Koa();
const fs=require('fs');

app.use(async(ctx,next)=>{
  await next()
  ctx.type='html';
  ctx.status=200;
  ctx.body=await fs.readFileSync('./Websocket/index.html','utf8')
})

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


app.listen(3000);
console.log('server is running at 3000')