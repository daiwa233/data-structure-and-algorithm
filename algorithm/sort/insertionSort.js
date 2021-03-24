const { swap } = require('./utils');

const insertionSort = (arr) => {
  let index;
  for(let i=1; i<arr.length; i++) {
    index = i;
    for(let j=i-1; j>=0 && arr[index]<arr[j]; j--) {
        swap(arr, index, j);
        index = j;
    }
  }
  return arr;
}


const testArr1 = [3,2,0,1,4,11,6,22,5];

const ans = insertionSort(testArr1);

console.log(ans);