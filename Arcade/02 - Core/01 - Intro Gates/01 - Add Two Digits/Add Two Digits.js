function addTwoDigits(n) {
    var sum = 0;
    while (n > 0) {
        var mod = n % 10;
        sum += mod;
        n = (n - mod) / 10;
    }
    return sum;
}
​