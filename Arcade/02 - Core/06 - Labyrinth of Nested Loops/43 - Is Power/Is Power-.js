function isPower(n) {
    var b = 2;
    if (n == 1) return true;
    while (b < n) {
        console.log(Math.pow(n, 1/b));
        var p = Math.pow(n, 1/b)
        if (Math.abs(p - Math.round(p)) < 0.00000001) return true;
        b++;
    }
    return false
}
​