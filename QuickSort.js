function selectPivot(arr){
  /* 选择枢纽的函数 */
   const idx=Math.floor(arr.length/2);
   const pivot=arr[idx];
   return pivot;
}


function quickSort(arr){
  /* 枢纽选择：三者取中法 */
  const len=arr.length-1;
  let  pivot=selectPivot(arr)  //选择枢纽 idx
  let left=[],
      right=[];

  for(let i=0 ; i<len ; i++){
    if(arr[i]>pivot){
      right.push(arr[i])
    }else{
      left.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot],quickSort(right));
  

  
}

//参考 https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-1.php