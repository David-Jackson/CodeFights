function notIndexOf(givenString, value) {
    var res = -1;
    for (var i = 0; i < givenString.length - value.length + 1; i++) {
        var allDiff = true;
        for (var j = 0; j < value.length; j++) {
            if (givenString[i + j] == value[j]) {
                allDiff = false;
                break;
            }
        }
        if (allDiff) {
            res = i;
            break;
        }
    }
    return res;
}
​