/* 
  连续触发函数在 wait 秒内只会执行一次

*/




/* 时间戳版 */
function throttleTimeVersion(func,wait){
  let previous=0;
  return function(){
    const now=Date.now()
    if(now-previous>wait){
      func.apply(this,arguments)
      previous=now      
    }
  }
}

/* 测试用例 */



/* 定时器版 */
function throttleSetTimeoutVersion(func,wait){
  let timeout;
  return function(){
    if(!timeout){
      timeout=setTimeout(()=>{
        timeout=null;
        func.apply(this,arguments);
      },wait)
    }
  }
}