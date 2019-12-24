/* 
  最好时间复杂度 O(NLogN)
  平均时间复杂度 O(NlogN)
  最坏时间复杂度 O(N^2)
*/


function selectPivot(arr){
  /* 选择枢纽的函数 */
   const idx=Math.floor(arr.length/2);
   const pivot=arr.splice(idx, 1)[0];
   return pivot;
}


function quickSort(arr){
  /* 枢纽选择：三者取中法 */
  if (arr.length <= 1) { return arr; }
  const len=arr.length-1;
  let  pivot=selectPivot(arr)  //选择枢纽 idx
//   var pivotIndex = Math.floor(arr.length / 2) ;
// 　　var pivot = arr.splice(pivotIndex, 1)[0];

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

function quickSortPureES6(arr) {
  if (!arr) {
    return;
  }
  if (arr.length <= 1) {
    return arr;
  }
  const len = arr.length;
  const pivotIdx = Math.floor(len / 2);
  const pivot = arr.splice(pivotIdx, 1)[0];

  const left = [],
    right = [];

  for (let el of arr) {
    if (el > pivot) {
      right.push(el);
    } else {
      left.push(el);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([1,2,4,3,12,7,8,9]))
//参考 https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-1.php