function checkTypes(el,type){
  if(type===Array){
    return Object.prototype.toString.call(el)==='[object Array]';
  }
  else if(type===Object){
    return Object.prototype.toString.call(el)==='[object Object]';
  }
  else if(type===String){
    return Object.prototype.toString.call(el)==='[object String]';
  }
  else if(type===Number){
    return Object.prototype.toString.call(el)==='[object Number]';
  }
  else if(type===Boolean){
    return Object.prototype.toString.call(el)==='[object Boolean]';
  }
  else if(type===Function){
    return Object.prototype.toString.call(el)==='[object Function]';
  }
  /* 
    没有检查 null 和 undefined 
  */
  else{
    return Object.prototype.toString.call(el)
  }
} 

module.exports=checkTypes