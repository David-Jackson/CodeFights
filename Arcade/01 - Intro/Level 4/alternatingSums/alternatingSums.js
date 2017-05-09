function alternatingSums(a) {
    var sums = [0, 0];
    for (var i = 0; i < a.length; i++) {
        sums[i % 2] += a[i];
    }
    return sums;
}
​