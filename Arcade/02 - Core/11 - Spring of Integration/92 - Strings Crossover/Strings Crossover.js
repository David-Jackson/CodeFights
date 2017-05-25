function stringsCrossover(inputArray, result) {
    function canCross(s1, s2, res) {
        for (var i = 0; i < res.length; i++) {
            if (s1[i] != res[i] && s2[i] != res[i]) return false;
        }
        return true;
    }
    var count = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        var a = inputArray[i];
        for (var j = i + 1; j < inputArray.length; j++) {
            var b = inputArray[j];
            if (canCross(a, b, result)) count++;
        }
    }
    return count;
}
​