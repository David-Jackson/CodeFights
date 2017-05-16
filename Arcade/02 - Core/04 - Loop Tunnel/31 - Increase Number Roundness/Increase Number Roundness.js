function increaseNumberRoundness(n) {
    var zeroes = true;
    while (n > 0) {
        var r = n % 10;
        if (zeroes) {
            if (r != 0) {
                zeroes = false;
            }
        } else {
            if (r == 0) {
                return true;
            }
        }
        n = Math.floor(n / 10);
    }
    return false;
}
​