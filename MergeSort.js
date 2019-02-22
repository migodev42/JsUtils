/* 
  归并排序  

  拆分
  归并
  https://khan4019.github.io/front-end-Interview-Questions/sort.html#mergeSort
  https://khan4019.github.io/front-end-Interview-Questions/images/mergeSort.gif
*/

function merge(left, right) {
  /* 
    归并部分 
    传入两个数组 left right
    返回归并后的数组
  */
  const rs=[],
        lLen=left.length;
        rLen=right.length;
  let l=0,
      r=0;
  
  while( l<lLen && r< rLen){
    if(left[l] < right[r]){
      rs.push(left[l++]);
    }else{
      rs.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r))
}



function mergeSort(arr) {
  // 拆分
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left),mergeSort(right));

}