// ES5版本
// var Thunk = function(fn){
//   return function (){
//     var args = Array.prototype.slice.call(arguments);
//     return function (callback){
//       args.push(callback);
//       return fn.apply(this, args);
//     }
//   };
// };

// ES6版本
const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};


function *tryGnrator(){
  const rs1=yield Thunk(function () {
    console.log('hello')
  });
  const rs2=yield Thunk(function () {
    console.log('world')
  });;
  return 'done';
}

// const tryG=tryGnrator();
// console.log(tryG.next())
// console.log(tryG.next())
// console.log(tryG.next())

function autoRunGen(fn){
  const gen=fn();

  function next(err,data){
    const result=gen.next(data);
    console.log(result);
    if(err || result.done) return;
    result.value(next)
  }

  next()
}

autoRunGen(tryGnrator);

debugger;