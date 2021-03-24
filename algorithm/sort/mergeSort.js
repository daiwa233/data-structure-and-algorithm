const merge = (leftArr, rightArr) => {
  const result = [];

  while(leftArr.length && rightArr.length) {
    if (leftArr[0] > rightArr[0]) {
      result.push(rightArr.shift());
    } else {
      result.push(leftArr.shift());
    }
  }

  if(leftArr.length) {
    result.push(...leftArr);
  }
  if(rightArr.length) {
    result.push(...rightArr);
  }

  return result;
}


const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
  
}


const testArr1 = [3,2,0,1,4,11,6,22,5];

const ans = mergeSort(testArr1);

console.log(ans);



const mergeSort2 = (arr) => {
  for(let i=0; i<arr.length; i++) {

  }
}


function addComma(num) {
  // 不考虑小数和负数了
  const stack = [];
  let ans = '';
  const str= num.toString();
  for(let i=0; i<str.length; i++) {
    stack.push(str[i]);
  }
  let len = stack.length;
  while(stack.length) {
    const next = stack.pop();
    ans = next + ans;
    if (len - stack.length === 3 && stack.length !== 0) {
      len = stack.length;
      ans = ',' + ans;
    }
  }
  return ans;
}

