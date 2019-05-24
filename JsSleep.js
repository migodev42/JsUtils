

function sleep(time){
  return new Promise( (resolve,reject)=>{
      setTimeout(resolve,time);
  })
}
async function run(){
  console.log(1)
  await sleep(3000);
  console.log(2)
}

// run();

/* 
  原理：
  async/await中，sleep中的Promise被阻塞了
  (await 等待Promise状态改变后，再继续执行当前主线程，理解为await阻塞异步操作，与Promise的then基本等价)
  另：Promise的
*/

module.exports={sleep};