async function log(x){
  console.log(x)
  setTimeout(()=>{ console.log('H')},0);
  new Promise((resolve,reject)=>{
    console.log("G");
    resolve();
  }).then(()=>{
    console.log('J')
  })

  await new Promise((resolve,reject)=>{
    console.log('await 1');
    resolve()
  }).then(()=>{
    console.log('await 2');
  })
  console.log('I');
}


new Promise((resolve,reject)=>{
  console.log('A');
  resolve();
}).then(()=>{
  console.log('B')
})

console.log('C');

setTimeout(function(){
  console.log('D')
},0)

log('E')
console.log('F');
debugger;