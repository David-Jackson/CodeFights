function uniqueDigitProducts(a) {
    return a.map(function(val) {
        var p = 1;
        while (val > 0) {
            p *= (val % 10);
            val = Math.floor(val / 10);
        }
        return p;
    }).reduce(function(acc, val) {
        if (acc.indexOf(val) == -1) acc.push(val);
        return acc;
    }, []).length;
}
​