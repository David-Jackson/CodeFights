function fractionMultiplication(a, b) {
​
  var gcdEuclid = function(a, b) {
    if (!a) {
      return b;
    }
    return gcdEuclid(b % a, a);
  }
​
  var c = [a[0] * b[0], a[1] * b[1]],
      gcd = gcdEuclid(c[0], c[1]);
​
  c[0] /= gcd;
  c[1] /= gcd;
​
  return c;
}
​