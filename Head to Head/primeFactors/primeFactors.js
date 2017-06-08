function primeFactors(n) {
  var factors = [],
      divisor = 2;
​
  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor); n = Math.floor(n / divisor);
    }
    else {
      divisor++;
    }
  }
  return factors;
}
​