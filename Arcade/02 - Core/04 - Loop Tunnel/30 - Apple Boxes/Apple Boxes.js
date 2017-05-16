function appleBoxes(k) {
    var diff = 0;
    for (var i = 1; i <= k; i++) {
        var sign = (i % 2 == 0) ? 1 : -1;
        diff += sign * i * i;
    }
    return diff;
}
​