function digitDifferenceSort(a) {
    function digitDifference(x) {
        var max = 0; 
        var min = Infinity;
        while (x > 0) {
            var r = x % 10;
            x = Math.floor(x / 10);
            max = Math.max(max, r);
            min = Math.min(min, r);
        }
        return max - min;
    }
    return a.map(function(val, index, arr) {
        var dd = digitDifference(val);
        return {
            val: val,
            index: index,
            dd: dd
        }
    }).sort(function(x, y) {
        if (x.dd > y.dd) return 1;
        if (x.dd < y.dd) return -1;
        if (x.index > y.index) return -1;
        if (x.index < y.index) return 1;
    }).map(function(val) {
        return val.val;
    });
}
​