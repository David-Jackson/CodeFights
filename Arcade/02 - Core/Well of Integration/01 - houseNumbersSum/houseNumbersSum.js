function houseNumbersSum(inputArray) {
    var n = inputArray.shift();
    if (n == 0) return 0;
    return n + houseNumbersSum(inputArray);
}
​