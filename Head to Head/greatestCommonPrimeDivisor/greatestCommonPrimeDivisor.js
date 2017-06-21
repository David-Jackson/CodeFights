function greatestCommonPrimeDivisor(a, b) {
​
  var gcd = -1;
  for (var divisor = 2;  divisor <= Math.min(a, b) ; divisor++) {
    if (a % divisor === 0 && b % divisor === 0) {
      gcd = divisor;
    }
    while (a % divisor === 0) {
      a /= divisor;
    }
    while (b % divisor === 0) {
      b /= divisor;
    }
  }
​
  return gcd;
}
​