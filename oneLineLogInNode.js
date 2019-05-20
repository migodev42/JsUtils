


const log = require('single-line-log').stdout;
// const fs=require('fs');
// or pass any stream:
// var log = require('single-line-log')(process.stdout);
 
// let read = 0;
// const size = fs.statSync('super-large-file').size;
 
// var rs = fs.createReadStream('super-large-file');
// rs.on('data', function(data) {
//     read += data.length;
//     var percentage = Math.floor(100*read/size);
 
//     // Keep writing to the same two lines in the console
//     log('Writing to super large file\n[' + percentage + '%]', read, 'bytes read');
// });
/* ^^^^^^https://www.npmjs.com/package/single-line-log^^^^^^^^ */



class ProgressBar{
  constructor(totalTask){
    this.totalTask= totalTask || 100;
    this.totalBlock=25;
    this.curTask=0;
    this.percent=0;
  }

  add(someTask){
    this.curTask+=someTask || 0.001;
  }

  caculatePercent(){
    this.percent=((this.curTask/this.totalTask)*100).toFixed(2)
  }
  caculateBlock(blockStyle='█',bgStyle='░'){
    const bnums=Math.floor((this.curTask/this.totalTask)*this.totalBlock);
    let blocks='',
        bg=''
    for(let i =0; i<bnums;i++){    
      blocks+=blockStyle
    }

    for(let i =0; i<this.totalBlock-bnums;i++){
      bg+=bgStyle
    }
    
    return {blocks,bg}
  }
  basicLog(){
    this.caculatePercent();
    log('进度 ['+this.percent+'%]')
  }

  barLog(){    
    this.caculatePercent();
    const {blocks,bg}=this.caculateBlock();        
    log('进度 ['+blocks+bg+'] '+this.percent+'%')
  }
}

/******** useage *********/
/* npm install single-line-log */

const p =new ProgressBar(1000000)
const taskAdd=50;
let read = 0;
while(read<1000000){
  read+=taskAdd;
  p.add(taskAdd)
  p.basicLog()
  // p.barLog()
    
}
/************************/


module.exports={ProgressBar}