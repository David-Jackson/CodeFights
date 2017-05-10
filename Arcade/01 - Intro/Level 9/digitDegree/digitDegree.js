function digitDegree(n) {
    var sumOfDigits = function(x) {
        var sum = 0;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        return sum;
    }
    if (n < 10) return 0;
    return 1 + digitDegree(sumOfDigits(n));
}
​