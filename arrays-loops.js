function max(numbers) {
  // Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop
  let max = numbers[0];
  let i = 1;
  // Set a local variable max
  while (i < numbers.length) {
    if (numbers[i] > max) max = numbers[i];
    i++;
  }
  return max;
}

// console.log(max([1,2,3,4])); // 4
// console.log(max([])); // undefined
// console.log(max([4,21,31,9,2,1])); // 31
// console.log(max([1])); // 1


function min(numbers) {
  // Redo "Compute the average" exercise but use the Array.forEach() method instead of a for loop
  let min;

  numbers.forEach((number) => {
    if (!min || number < min) min = number;
  });

  return min;
}

console.log(min([])); // undefined
console.log(min([1,2,3,4])); // 1
console.log(min([34, 55, 2, 12])); // 2
console.log(min([5])); // 5