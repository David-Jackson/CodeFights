function adjacentElementsProduct(inputArray) {
    max = -99999;
    for (var i = 0; i < inputArray.length - 1; i++) {
        max = Math.max(inputArray[i] * inputArray[i + 1], max);
    }
    return max;
}
​