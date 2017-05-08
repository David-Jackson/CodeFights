function successivePrimes(primes) {
    var arr = analyzeArray(primes);
    var allPrimes = primeSieve(arr.max);
    for (var i = arr.min; i < arr.max; i++) {
        if (allPrimes[i] && arr.values.indexOf(i) == -1) {
            return i;
        }
    }
}

function analyzeArray(arr) {
    var obj = {
        min: Infinity,
        max: 0,
        values: []
    };
    for (var i = 0; i < arr.length; i++) {
        obj.values.push(arr[i]);
        obj.min = Math.min(arr[i], obj.min);
        obj.max = Math.max(arr[i], obj.max);
    }
    return obj;
}

function primeSieve(n) {
    var l = new Array(n + 1);
    l.fill(true);
    
    for (var i = 2; i <= Math.pow(n, 0.5); i++) {
        if (l[i]) {
            for (var j = 0; j <= n; j = j + i) {
                l[j] = false;
            }
        }
    }
    
    return l;
}