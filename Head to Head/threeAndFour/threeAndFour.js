function threeAndFour(n) {
  var result = [];
  for (var counter = 0; counter < n; counter++) {
    if (counter % 3 === 0 && counter % 4 === 0)
      result.push(counter);
  }
  return result;
}
​