const cluster=require('cluster');
const os=require('os');

if(cluster.isMaster){
  const numWorkers=require('os').cpus().length;
  console.log('Master is setting up '+numWorkers+' workers...');
  debugger;

  for(let i=0,n=os.cpus().length; i<n ; i++){
    cluster.fork();    
    debugger;
  }

  cluster.on('online',()=>{
    console.log('Worker'+worker.process.pid+'is online');
  })

  cluster.on('exit',()=>{
    console.log('Worker '+worker.process.pid+' died with code: ' + code + ', and signal: ' + signal)
    console.log('Starting a new worker');
    cluster.fork();
  })

}else{
  console.log(cluster)
  debugger;
}