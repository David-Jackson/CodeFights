function lateRide(n) {
    var hrs = Math.floor(n / 60);
    var min = n - (60 * hrs);
    var sum = 0;
    n = (hrs * 100) + min;
    while (n > 0) {
        var mod = n % 10;
        sum += mod;
        n -= mod;
        n /= 10;
    }
    return sum;
}
​