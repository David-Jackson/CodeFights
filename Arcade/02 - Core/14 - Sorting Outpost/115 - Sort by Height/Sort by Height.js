function sortByHeight(a) {
    var sorted = a.filter(n => n != -1).sort(function(a, b) {
        return a < b;
    });
    for (var i = 0; i < a.length; i++) {
        if (a[i] != -1) a[i] = sorted.pop();
    }
    return a;
}
​