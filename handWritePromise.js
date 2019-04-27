

function handWritePromise() {
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';

  const _this = this;

  _this.state = PENDING;
  _this.value = null;
  _this.resolvedCallbacks = [];
  _this.rejectedCallbacks = [];

  function resolve(value) {
    if (_this.state === PENDING){
      _this.state=RESOLVED;
      _this.value=value;
      _this.resolvedCallbacks.map(cb=>{
        cb((_this.value));
      })
    }
  }
  function reject(value) {
    if (_this.state === PENDING){
      _this.state=REJECTED;
      _this.value=value;
      _this.rejectedCallbacks.map(cb=>{
        cb((_this.value));
      })
    }
  }
}


handWritePromise.prototype.then=function(onFulfilled,onRejected){
  const _this=this;
  onFulfilled= typeof onFulfilled === 'function' ? onFulfilled : v=>v
  onRejected = typeof onRejected === 'function'
              ? onRejected
              : r=>{
                throw r
              }
}