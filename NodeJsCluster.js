const cluster=require('cluster');
const os=require('os');

if(cluster.isMaster){
  const numWorkers=require('os').cpus.length;
  console.log('Master is setting up '+numWorkers+' workers...';
  debugger;

  for(let i=0,n=os.cpus().length; i<n ; i++){
    cluster.fork();    
  }

  cluster.on('online',()=>{
    console.log('Worker'+Worker)
  })

}else{
  console.log(cluster)
  debugger;
}