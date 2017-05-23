function arrayConversion(inputArray) {
    var oddIter = true;
    while (inputArray.length != 1) {
        var arr = [];
        for (var i = 0; i < inputArray.length; i = i + 2) {
            if (oddIter) {
                arr.push(inputArray[i] + inputArray[i + 1]);
            } else {
                arr.push(inputArray[i] * inputArray[i + 1]);
            }
        }
        oddIter = !oddIter;
        inputArray = arr;
    }
    return inputArray[0];
}
​