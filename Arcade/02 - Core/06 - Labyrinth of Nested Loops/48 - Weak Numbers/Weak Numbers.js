function weakNumbers(n) {
    var numberOfDivisors = function(x) {
        var res = 0;
        for (var i = 1; i <= Math.sqrt(x); i++) {
            if (x % i == 0) {
                res++;
                if (i != x / i) res++;
            }
        }
        return res;
    }
    
    var div = numberOfDivisors(n);
    var arr = []
    
    for (var i = 1; i < n; i++) {
        var num = numberOfDivisors(i)
        if (num > div) arr.push(num);
    }
    return num
    
}
​