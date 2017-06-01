function factorSum(n) {
    var orig = n;
    var sum = 0;
    var d = 2;
    while (n > 1) {
        if (n % d == 0) {
            sum += d;
            n = Math.floor(n / d);
            d-= 1;
        }
        d += 1;
    }
    return (orig == sum) ? sum : factorSum(sum);
}
​