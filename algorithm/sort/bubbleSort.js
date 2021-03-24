const { swap } = require('./utils')

const bubbleSort = (arr) => {
  const len = arr.length;
  for(let i=0; i<len - 1; i++) {
    for(let j=0; j<len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

const testArr1 = [3,2,0,1,4,11,6,22,5];

const ans = bubbleSort(testArr1);

console.log(ans);


/**
 * 针对原先有序的数组优化后的冒泡排序，
 * @param {*} arr 
 * @returns 
 */
const bubbleSort2 = (arr) => {
  const len = arr.length;
  let flag = false;
  for(let i=0; i<len - 1; i++) {
    if (flag === true) {
      break;
    }
    flag = true;
    for(let j=0; j<len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        flag = false;
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

const ans2 = bubbleSort2(testArr1);

console.log('bubbleSort2',ans2);


const bubbleSort3 = (arr) => {
  const len = arr.length;
  let left = 0;
  let right = len - 1;
  while(right > left) {
    for(let i=left; i<right; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i+1);
      }
    }

    for(let j=right; j>left; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j-1);
      }
    }

    right -= 1;
    left += 1;
  }
  return arr;
}

const ans3 = bubbleSort3(testArr1);

console.log('bubbleSort3',ans3);