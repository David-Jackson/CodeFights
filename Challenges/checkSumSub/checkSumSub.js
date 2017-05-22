function checkSumSub(arr, k) {
    for (var i = 0; i < arr.length; i++) {
        var cur = 0;
        for (var j = i; j < arr.length; j++) {
            cur += arr[j];
            if (cur == k) return true;
        }
    }
    return false;
}
​