function cipher26(message) {
    var sum = charToNumber(message[0]);
    var res = message[0];
    for (var i = 1; i < message.length; i++) {
        var charNum = ((26 - (sum % 26)) + charToNumber(message[i])) % 26;
        res += numberToChar(charNum);
        sum += charNum;
    }
    return res;
}
​
function charToNumber(c) {
    return c.charCodeAt(0) - 97;
}
​
function numberToChar(x) {
    return String.fromCharCode(x + 97);
}