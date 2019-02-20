function swap(arr, pos1, pos2) {
  /* 将 pos1位置 和 pos2位置 的元素互换*/
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

function bubbleSort(arr) {
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
}