const partion = (arr) => {
  const privot = arr[0];
  const left = [];
  const right = [];
  const middle = [];
  for(let val of arr) {
    if (val > privot) {
      right.push(val);
    } else if (val < privot) {
      left.push(val);
    } else {
      middle.push(val);
    }
  }
  return [left,middle, right];
}

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const [left, middle, right] = partion(arr);
  return [].concat(quickSort(left)).concat(middle).concat(quickSort(right));
}

const testArr1 = [3,2,0,1,4,11,6,22,5];

const ans = quickSort(testArr1);

console.log(ans);