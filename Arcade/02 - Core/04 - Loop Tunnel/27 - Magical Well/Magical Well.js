function magicalWell(a, b, n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += a*b;
        a++;
        b++;
    }
    return sum;
}
​