/* 
  column的render函数
*/
render: (text, record, idx) => {
  console.log(text, record, idx);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text.replace("\n", "<br>") }}
    />
  );


  /* 
    Antd中的多行输入组件
  
  */
  const { TextArea }=Input