function numberOfOperations(a, b) {
​
  if (a < b) {
    var t = a;
    a = b;
    b = t;
  }
  if (a % b !== 0) {
    return 0;
  }
  return 1 + numberOfOperations(a / b, b);
}
​