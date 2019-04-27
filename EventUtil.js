/* 
  跨浏览器事件处理
  《Js高级程序设计》第三版 P354 P360
*/

const EventUtil = {
  /* 兼容 IE的事件处理 */

  addHandler: function (elem, type, handler) {
    if (elem.addEventListener) {
      elem.addEventListener(type, handler, false);
    } else if (elem.attachEvent) {
      /* 兼容 IE事件 */
      elem.attachEvent(`on${type}`, handler);
    } else {
      /* 兼容 DOM0级事件 */
      elem[`on${type}`] = handler;
    }

  },
  removeHandler: function (elem, type, handler) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handler, false);
    } else if (elem.detachEvent) {
      /* 兼容 IE事件 */
      elem.detachEvent(`on${type}`, handler);
    } else {
      /* 兼容 DOM0级事件 */
      elem[`on${type}`] = null;
    }
  },

  /* 兼容 IE的事件对象 */
  getEvent: function (event) {
    return event ? event : window.event;
  },

  getTarget: function (params) {
    return event.target || event.srcElement
  },

  preventDefault: function(event){
    if(event.preventDefault){
      event.preventDefault();
    }else{
      event.returnvalue=false;
    }   
  },

  stopPropagation: function(){
    if(event.stopPropagation){
      event.stopPropagation();
    }else{
      event.cancelBubble=true;
    }
  }



}