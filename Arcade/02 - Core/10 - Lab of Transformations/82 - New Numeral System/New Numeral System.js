function newNumeralSystem(number) {
    var n = fromBase26(number);
    var res = [];
    for (var i = 0; i <= n / 2; i++) {
        var a = toBase26(i);
        var b = toBase26(n - i);
        res.push(a + " + " + b);
    }
    return res;
}
​
function toBase26(x) {
    return String.fromCharCode(x + 65);
}
​
function fromBase26(s) {
    return s.charCodeAt(0) - 65;
}