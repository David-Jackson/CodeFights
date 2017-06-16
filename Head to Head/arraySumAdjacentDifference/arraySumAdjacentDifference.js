function arraySumAdjacentDifference(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        sum += Math.abs(inputArray[i] - inputArray[i + 1]);
    }
    return sum;
}
​