function allLongestStrings(inputArray) {
    var maxLength = 0;
    var outputArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var str = inputArray[i];
        if (str.length > maxLength) {
            maxLength = str.length;
            outputArray = [];
        }
        if (str.length == maxLength) {
            outputArray.push(str);
        }
    }
    return outputArray;
}
​