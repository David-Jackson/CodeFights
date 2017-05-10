function firstDigit(inputString) {
    for (var i = 0; i < inputString.length; i++) {
        var c = inputString.charCodeAt(i);
        if (c >= 48 && c <= 57) return inputString[i];
    }
}
​