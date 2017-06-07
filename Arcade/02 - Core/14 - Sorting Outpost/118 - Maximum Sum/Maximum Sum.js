function maximumSum(a, q) {
    var less = function(a, b) {
        return a - b;
    }
    
    var sumCounts = new Array(a.length).fill(0);
    
    for (var i in q) {
        for (var j = q[i][0]; j <= q[i][1]; j++) {
            sumCounts[j]++;
        }
    }
    
    a.sort(less);
    sumCounts.sort(less);
    
    var res = 0;
    for (var i in a) {
        res += a[i] * sumCounts[i];
    }
    
    return res;
}
​