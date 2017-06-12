function isTandemRepeat(inputString) {
    if (inputString.length % 2 != 0) return false;
    for (var i = 0; i < inputString.length / 2; i++) {
        if (inputString[i] != inputString[i + (inputString.length / 2)]) return false;
    }
    return true;
}
​