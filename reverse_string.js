const reverseString = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    const firstTemp = arr[i];
    const lastTemp = arr[arr.length - 1 - i];
    arr[i] = lastTemp;
    arr[arr.length - 1 - i] = firstTemp
  }
  return arr;
}

const test = ['a', 'b', 'c', 'd', 'f', 'g'];

console.log(reverseString(test));



