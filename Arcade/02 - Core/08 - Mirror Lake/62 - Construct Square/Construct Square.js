function constructSquare(s) {
    var diffLetters = differentLettersCount(s);
    var sqr = nextBiggestSquare(
        Math.pow(10, s.length) - 1
    );
    var lowerLimit = Math.pow(10, s.length - 1);
    while (sqr > lowerLimit) {
        var diffNums = differentNumbersCount(sqr);
        if (diffLetters.toString() == diffNums.toString()) return sqr;
        sqr = nextBiggestSquare(sqr - 1);
    }
    return -1;
}
​
function differentLettersCount(str) {
    var res = new Array(26);
    res.fill(0);
    for (var i = 0; i < str.length; i++) {
        res[str.charCodeAt(i) - 97] += 1;
    }
    return res.filter(n => n != 0).sort();
}
​
function differentNumbersCount(n) {
    var res = new Array(10);
    res.fill(0);
    while(n > 0) {
        var r = n % 10;
        res[r] += 1;
        n -= r;
        n /= 10;
    }
    return res.filter(n => n != 0).sort();