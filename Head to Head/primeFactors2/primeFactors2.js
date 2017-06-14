function primeFactors2(n) {
  var factors = [],
      divisor = 2;
​
  while (n !== 1) {
    if (n % divisor === 0) {
      factors.push(divisor);
    }
    while (n % divisor === 0) {
      n /=  divisor ;
    }
    divisor++;
  }
​
  return factors;
}
​