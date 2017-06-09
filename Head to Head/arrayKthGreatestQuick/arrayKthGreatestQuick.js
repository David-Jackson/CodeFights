function arrayKthGreatestQuick(inputArray, k) {
​
  var pos = Math.floor(Math.random() * inputArray.length);
  var left = [];
  var right = [];
​
  if (inputArray.length === 1) {
    return inputArray[0];
  }
​
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[pos] > inputArray[i]) {
      left.push(inputArray[i]);
    } else {
      right.push(inputArray[i]);
    }
  }
​
  if (right.length >= k) {
    return arrayKthGreatestQuick(right, k);
  }
  return arrayKthGreatestQuick(left, k - right.length);
}
​