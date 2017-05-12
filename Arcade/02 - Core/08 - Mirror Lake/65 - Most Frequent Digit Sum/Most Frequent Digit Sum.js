function mostFrequentDigitSum(n) {
    var stepCount = {0:0};
    var mostFreqStep = 0;
    var sumDigits = function(n) {
        var sum = 0;
        while (n > 0) {
            var r = n % 10;
            sum += r;
            n -= r;
            n /= 10;
        }
        return sum;
    }
    while (n > 0) {
        var s = sumDigits(n);
        n -= s;
        if (!stepCount[s]) stepCount[s] = 0;
        stepCount[s] += 1;
        if (stepCount[s] > stepCount[mostFreqStep]) {
            mostFreqStep = s;
        } else if (stepCount[s] == stepCount[mostFreqStep]) {
            mostFreqStep = Math.max(s, mostFreqStep);
        }
    }
    return mostFreqStep;
}
​