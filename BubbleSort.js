
/* 
  最好时间复杂度 O(N)
  平均时间复杂度 O(N^2)
  最坏时间复杂度 O(N^2)
*/

function swap(arr, pos1, pos2) {
  /* 将 pos1位置 和 pos2位置 的元素互换*/
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}


//容易理解的实现
function bubbleSortBasic(arr) {
  let len = arr.length;
  let i,
    j,
    stop;
  for (i = 0; i < len - 1; i++) {
    /* 外循环遍历整个数组 */
    for (j = 0, stop = len - 1 - i; j < stop; j++) {
      /* 
        内循环将 从第i个位置 开始到 数组末尾 的 逆序数 交换位置 
        stop为计算第i个元素的对应的数组末尾
      */
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}


//更常见的实现
function bubbleSort(arr) {
  let swaped;
  do {
    swaped = false;
    for (var i = 0; i < arr.length; i++){
      //这里必须用var，而不是let
      if(arr[i] &&arr[i+1]&&arr[i]>arr[i+1] ){
        swap(arr,i,i+1);
        swaped=true;
      }
    }

  } while (swaped)
  return arr;
}



// 参考 http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm/
//     https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php