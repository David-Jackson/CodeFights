function digitDistanceNumber(n) {
    var digits = [];
    var res = 0;
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    digits = digits.reverse();
    for (var i = 0; i < digits.length - 1; i++) {
        res *= 10;
        res += Math.abs(digits[i] - digits[i + 1])
    }
    return res;
}
​