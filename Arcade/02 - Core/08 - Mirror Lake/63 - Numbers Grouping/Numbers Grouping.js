function numbersGrouping(a) {
    var groups = {};
    for (var i = 0; i < a.length; i++) {
        var group = getGroup(a[i]);
        if (!groups[group]) groups[group] = 0;
        groups[group] += 1;
    }
    var headers = 0;
    var lines = 0;
    for (var group in groups) {
        headers += 1;
        lines += groups[group];
    }
    return headers + lines;
}
​
function getGroup(num) {
    return Math.floor((num-1) / 1E4);
}