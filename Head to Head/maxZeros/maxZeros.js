function maxZeros(n) {
  var answer = 0,
      maxZeros = 0;
  for (var k = 2; k <= n; k++) {
    var numZeros = 0,
        value = n;
    while (value) {
      if (value % k === 0) {
        numZeros++;
      }
      value = Math.floor(value / k);
    }
    if (numZeros > maxZeros) {
      maxZeros = numZeros;
      answer = k;
    }
  }
  return answer;
}
​