function largestNumber(n) {
    var num = 0;
    for (var i = 0; i < n; i++) {
        num *= 10;
        num += 9;
    }
    return num;
}
​