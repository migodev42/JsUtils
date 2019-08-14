import React, { Component } from 'react';

/* 
  class component 
*/
class ComponentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};


  }
  render() {
    return (
      <div>SomeThing</div>
    )
  }
}

/* 
  function Component 
*/
function FuncComponentName(props) {
  const { data } = props;
  return (
    <div>FuncComponentName</div>
  )
}

/* 
  Hook Componnet
*/
// import React from 'react';
import { useState, useEffect  } from 'react'
function FuncComponentName(props) {
  const { data } = props;
  
  const [example,setExample]=useState('initialValue')  
  
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    // document.title = `You clicked ${count} times`;
  });

  return (
    <div>FuncComponentName</div>
  )
}

export default ComponentName;

export { FuncComponentName }