function countBlackCells(n, m) {
    
    var GCF = function(a, b) {
        if (b == 0) return a;
        return GCF(b, Math.floor(a % b));
    }
    
    var temp = Math.min(n, m);
    m = Math.max(n, m);
    n = temp;
    
    var counter = m - n + 1;
    
    if (m % n == 0) {
        counter += (m / (m / n)) - 1;
    } else {
        var lcm = Math.floor(m / GCF(m, n));
        if ( lcm != 1 ) {
            counter += Math.floor(m / lcm) - 1;
        }
    }
    
    return counter;
}
​