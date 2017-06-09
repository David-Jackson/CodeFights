function countWays(n, k) {
    var ways = [];
    for (var i = 0; i <= n; i++) {
        var arr = [];
        for (var j = 0; j <= k; j++) {
            arr.push(0);
        }
        ways.push(arr);
    }
    ways[0][0] = 1;
    for (var i = 0; i < n; i++) {
        var cur = ways[i];
        var next = ways[i + 1];
        for (var j = 0; j <= k; j++) {
            if (i + 1 <= n) {
                next[j] = (next[j] + cur[j]) % (1e9 + 7);
                if (j + 1 <= k) {
                    next[j + 1] = (next[j + 1] + cur[j]) % (1e9 + 7);
                }
            }
        }
    }
    return ways[n][k];
}
​