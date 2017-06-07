function rightmostRoundNumber(inputArray) {
    var res = inputArray.length - 1 - inputArray.reverse().findIndex(function(val) {
        return val % 10 == 0;
    });
    return (res == inputArray.length) ? -1 : res;
}
​