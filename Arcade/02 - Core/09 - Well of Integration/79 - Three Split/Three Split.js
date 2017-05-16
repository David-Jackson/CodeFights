function threeSplit(a) {
    var count = 0;
    var sum = a.reduce(function (a, b) {
        return a + b;
    }, 0);
    var aim = sum / 3;
    var ai = 0;
    for (var i = 0; i < a.length - 2; i++) {
        ai += a[i];
        if (ai != aim) continue;
        var aj = 0;
        for (var j = i + 1; j < a.length - 1; j++) {
            aj += a[j];
            if (aj != aim) continue;
            var ak = 0;
            for (var k = j + 1; k < a.length; k++) {
                ak += a[k];
            }
            if (ak == aj) count++;
        }
    }
    return count;
}