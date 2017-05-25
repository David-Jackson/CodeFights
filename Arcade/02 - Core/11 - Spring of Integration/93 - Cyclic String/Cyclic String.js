function cyclicString(s) {
    var minCycleLen = s.length;
    for (var i = 0; i < s.length - 1; i++) {
        for (var j = i + 1; j <= s.length; j++) {
            if (j - i > minCycleLen) continue;
            var sub = s.substring(i, j);
            var cycle = new Array(3 * s.length).fill(sub).join("");
            if (cycle.indexOf(s) != -1) {
                minCycleLen = Math.min(minCycleLen, sub.length);
            }
        }
    }
    return minCycleLen;
}
​