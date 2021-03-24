const { swap } = require("./utils");

const selectionSort = (arr) => {
  const len = arr.length;
  let minIndex = 0;
  for(let i=0; i<len-1; i++) {
    minIndex = i;
    for(let j=i+1; j<len; j++) {
      if (arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    swap(arr, i, minIndex)
  }
  return arr;
}

const testArr1 = [3,2,0,1,4,11,6,22,5];

const ans = selectionSort(testArr1);

console.log(ans);
