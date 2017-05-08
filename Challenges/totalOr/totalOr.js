function totalOr(k) {
    var res = k;
    var max = parseInt(
        new Array(
            k.toString(2).length
        ).fill(1).join(""),
        2
    );
    for (var i = k - 1; i >= 0; i--) {
        res |= i;
        if (res == max) break;
    }
    return res;
}