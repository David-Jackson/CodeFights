function longestDigitsPrefix(inputString) {
    var pre = "";
    for (var i = 0; i < inputString.length; i++) {
        var c = inputString.charCodeAt(i);
        if (!(c >= 48 && c <= 57)) break;
        pre += inputString[i];
    }
    return pre;
}
​