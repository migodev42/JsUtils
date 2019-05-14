function handleDays(lastLoginTime){
  /* 将下列时间转换为毫秒日期格式 */
  const DAYS = {
    '今天': 0,
    '昨天': 1,
    '7天内': 3,
    '7天前': 7,
    '30天内': 15,
    '30天前': 30
}
const d=new Date();
const addDay=DAYS[lastLoginTime];
const dataTime=d.setDate(d.getDate()-addDay);
// console.log('公司登陆时间',dataTime);
return dataTime;
}


module.export={ 
  handleDays

}