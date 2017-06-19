function differentValuesInMultiplicationTable(n, m) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= m; j++) {
            var p = i * j;
            if (arr.indexOf(p) == -1) arr.push(p);
        }
    }
    return arr.length;
}
​