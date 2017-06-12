function pagesNumberingWithInk(current, numberOfDigits) {
    var digitsCount = function(n) {
        var res = 0;
        while (n > 0) {
            res++;
            n = Math.floor(n / 10);
        }
        return res;
    }
    while (numberOfDigits > 0) {
        numberOfDigits -= digitsCount(current);
        current++;
    }
    var off = 1;
    if (numberOfDigits < 0) off = 2;
    return current - off;
}
​