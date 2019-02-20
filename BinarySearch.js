function binarySearch(arr,el) {
/* 
  二分查找
  arr 传入的有序数组 
  el 待查找的元素
  时间复杂度 O(logN)

*/
  let low = 0;
  let high = arr.length-1;
  while(low <= high){
    let mid=Math.floor((high+low)/2);
    if(arr[mid]===el){
      return mid;
    }
    if(arr[mid]<el){
      low=mid+1;
    }else{
      high=mid-1;
    }
  }
  return -1

}