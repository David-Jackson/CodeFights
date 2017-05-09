function isLucky(n) {
    var s1 = 0,
        s2 = 0,
        p = 1;
    while (n > 0) {
        var d = n % 10;
        n = Math.floor(n / 10);
        if (p < n) {
            s1 += d;
        } else {
            s2 += d;
        }
        p *= 10;
    }
    return s1 == s2;
}
​