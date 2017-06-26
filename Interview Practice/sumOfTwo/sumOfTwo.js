function sumOfTwo(a, b, v) {
    var a1 = (a.length > b.length) ? b : a;
    var a2 = (a.length > b.length) ? a : b;
    var diffs = {};
    for (var i in a2) {
        diffs[v - a2[i]] = true;
    }
    for (var i in a1) {
        if (diffs[a1[i]]) return true;
    }
    return false;
}
​