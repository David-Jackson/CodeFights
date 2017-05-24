function arrayPreviousLess(items) {
    var res = [];
    for (var i = 0; i < items.length; i++) {
        var x = items[i];
        var prev = -1;
        for (var j = i - 1; j >= 0; j--) {
            if (items[j] < items[i]) {
                prev = items[j];
                break;
            }
        }
        res.push(prev);
    }
    return res;
}
​