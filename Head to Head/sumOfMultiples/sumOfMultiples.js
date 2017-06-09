function sumOfMultiples(n, k) {
​
  var result = 0;
​
  for (var i = 1; i <= n; i++) {
    if (i % k == 0) {
      result += i;
    }
  }
  return result;
}
​