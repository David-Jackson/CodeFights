function isSumOfConsecutive2(n) {
    var arr = [];
    var count = 0;
    for (var i = 1; i < n; i++) {
        arr.push(i);
    }
    
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        var j = 0;
        while (sum < n) {
            sum += arr[i + j];
            j++;
        }
        if (n == sum) {
            count++;
        }
    }
    return count;
}
​