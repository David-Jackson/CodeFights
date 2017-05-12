function allLongestStrings(inputArray) {
    var max = arrayMaxLength(inputArray);
    var res = []
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == max) res.push(inputArray[i]);
    }
}
​
function arrayMaxLength(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i].length);
    }
    return max;
}