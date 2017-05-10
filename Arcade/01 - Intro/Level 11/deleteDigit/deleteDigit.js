function deleteDigit(n) {
    var digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10)
    }
    digits.reverse();
    console.log(digits);
    var max = 0;
    for (var i = 0; i < digits.length; i++) {
        var num = 0;
        for (var j = 0; j < digits.length; j++) {
            if (i == j) continue;
            num *= 10;
            num += digits[j];
        }
        if (num > max) max = num;
    }
    return max;
}
​