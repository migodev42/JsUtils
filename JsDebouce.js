/* 函数防抖 */

function debounceSimple(func, wait) {
    let timer = null;
    return function () {
        // wait时间间隔内发起的多个func会被取消，只保留最后一个
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            // 绑定this的目的是，使得func的this指针保持普通,调用时候的指向
            // argument也为调用debounce过后的func传入的参数
            func.apply(this, arguments);
        }, wait)
    }

}


/* debounceSimple 测试用例 */
function Print(w, s) {
    console.log(w, s)
}

const print = debounceSimple(Print, 1000);

// print('Hello Debounce!', 'sssss');
// print('Hello Debounce!');
// print('Hello Debounce!', 'sssss');




/* 学习lodash函数防抖 */
function debounceMockLodash(func, wait) {
    let timer;
    return function () {
        console.log('timer', timer);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, wait)
    }
}

function debunceNode(func,wait){
    let timer, callnow=true;
    return function(...args){
        if(timer) clearTimeout(timer);
        callnow = !timer;        
        timer = setTimeout(()=>{            
            timer = null;
        },wait);
        
        if(callnow) func.apply(this, args);
    }
}