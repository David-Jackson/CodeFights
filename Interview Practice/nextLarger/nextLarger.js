function nextLarger(a) {
    var res = [];
    for (var i = 0; i < a.length; i++) {
        res.push(-1);
        for (var j = 0; j < res.length - 1; j++) {
            if (res[j] == -1 && a[j] < a[i]) {
                res[j] = a[i];
            }
        }
    }
    return res;
}
​