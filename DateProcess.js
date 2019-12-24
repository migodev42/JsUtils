function handleDays(lastLoginTime){
  /* 将下列时间转换为毫秒日期格式 */
  const DAYS = {
    '今天': 0,
    '昨天': 1,
    '7天内': 3,
    '7天前': 7,
    '15天前': 15,
    '30天前': 30
}
const d=new Date();
const addDay=DAYS[lastLoginTime];
const dataTime=d.setDate(d.getDate()-addDay);
// console.log('公司登陆时间',dataTime);
return dataTime;
}

Date.prototype.myFormat = function(fmt)   
{ //author: meizz   
  // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
  // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  




module.export={ 
  handleDays

}