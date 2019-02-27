const reverseString = (arr) => {
  let [i, j] = [0, arr.length -1];
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j--;
    i++;
  }
  return arr;
}

const test = ['a', 'b', 'c', 'd']

console.log(reverseString(test));