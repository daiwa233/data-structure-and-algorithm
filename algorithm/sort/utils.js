const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
// 另一种不借助变量的交换方法，但是需要 arr 中都是 number 类型
// arr[a] = arr[a] + arr[b];
// arr[b] = arr[a] - arr[b];
// arr[a] = arr[a] - arr[b];

module.exports = {
  swap,
}