function equilibriumPoint(arr) {
    function sum(a, b) {
        return a + b;
    }
    
    var arrSum = arr.reduce(sum);
    var runningSum = 0;
    
    for (var i = 0; i < arr.length; i++) {
        arrSum -= arr[i];
        if (runningSum == arrSum) return i + 1;
        runningSum += arr[i];
    }
    return -1;
}