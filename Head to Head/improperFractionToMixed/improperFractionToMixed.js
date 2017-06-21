function improperFractionToMixed(a) {
​
  var b = [Math.floor(a[1] / a[0])];
  b.push(a[0] - a[1] * b[0]);
  b.push(a[1]);
​
  return b;
}
​