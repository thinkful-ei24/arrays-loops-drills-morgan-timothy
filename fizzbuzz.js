const fizzBuzz = function(countTo) {
  let fizz = [];
  for (let i = 1; i <= countTo; i++) {
    fizz.push(i);
  }

  return fizz.map((num) => {
    if (num % 15 === 0) return 'fizzbuzz';
    if (num % 5 === 0) return 'buzz';
    if (num % 3 === 0) return 'fizz';
    return num;
  });
};

console.log(fizzBuzz(15));