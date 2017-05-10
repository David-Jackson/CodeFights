function extractEachKth(inputArray, k) {
    var arr = [];
    for (var i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k != 0) arr.push(inputArray[i]);
    }
    return arr;
}
​