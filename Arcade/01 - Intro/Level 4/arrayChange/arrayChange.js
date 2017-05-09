function arrayChange(inputArray) {
    var moves = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i + 1] <= inputArray[i]) {
            var delta = inputArray[i] - inputArray[i + 1] + 1;
            moves += delta;
            inputArray[i + 1] += delta;
        }
    }
    return moves;
}
​