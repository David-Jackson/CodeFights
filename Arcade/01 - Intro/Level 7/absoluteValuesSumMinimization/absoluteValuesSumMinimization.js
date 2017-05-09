function absoluteValuesSumMinimization(a) {
    var absSum = function(arr, x) {
        sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += Math.abs(arr[i] - x);
        }
        return sum;
    }
    var minSum = undefined;
    var minX = undefined;
    for (var i = 0; i < a.length; i++) {
        var x = a[i];
        var sum = absSum(a, x);
        if (minSum == undefined || sum < minSum) {
            minSum = sum;
            minX = x;
        }
    }
    return minX;
}
​