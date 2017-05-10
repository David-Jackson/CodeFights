function arrayMaxConsecutiveSum(inputArray, k) {
    var max = 0;
    for (var i = 0; i < inputArray.length + 1 - k; i++) {
        var sum = 0;
        for (var j = i; j < i + k; j++) {
            sum += inputArray[j];
        }
        if (sum > max) max = sum;
    }
    return max;
}
​