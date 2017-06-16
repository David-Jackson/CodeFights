function arrayMaxConsecutiveSum(inputArray, k) {
​
  var result = 0,
      currentSum = 0;
​
  for (var i = 0; i < k - 1; i++) {
    currentSum += inputArray[i];
  }
  for (var i = k - 1; i < inputArray.length; i++) {
    currentSum += inputArray[i];
    if (currentSum > result) {
      result = currentSum;
    }
    currentSum -= inputArray[i - k];
  }
​
  return result;
}
​