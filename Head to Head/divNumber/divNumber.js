function divNumber(k, l, r) {
    function numOfDiv(x) {
        var res = 0;
        for (var i = 1; i <= Math.sqrt(x); i++) {
            if (x % i == 0) {
                res++;
                if (x / i != i) res++;
            }
        }
        return res;
    }
    var count = 0;
    for (var i = l; i <= r; i++) {
        if (numOfDiv(i) == k) count++;
    }
    return count;
}
​