function squareDigitsSequence(a0) {
    var sumSqDigits = function(n) {
        var sum = 0;
        while (n > 0) {
            sum += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        return sum;
    }
    var hist = [];
    while (hist.indexOf(a0) == -1) {
        hist.push(a0);
        a0 = sumSqDigits(a0);
    }
    return hist.length + 1;
}
​