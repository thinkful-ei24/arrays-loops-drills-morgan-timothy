

function average(numbers){
    if(numbers.length === 0) return null;
    let sum = 0;
    numbers.forEach(number => sum += number);
    return sum / numbers.length;
}

console.log(average([4, 5, 6])); //5
console.log(average([])); //null
console.log(average([-1, -2, -3])); //-2