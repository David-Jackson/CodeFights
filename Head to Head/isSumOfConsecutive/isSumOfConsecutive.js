function isSumOfConsecutive(n) {
    if (n == 1) return true;
    var sums = [];
    for (var i = Math.ceil(n / 2); i >= 0; i--) {
        for (var j = 0; j < sums.length; j++) {
            sums[j] += i;
        }
        sums.push(i);
        if (sums.indexOf(n) != -1) return true;
    }
    return false;
}
​