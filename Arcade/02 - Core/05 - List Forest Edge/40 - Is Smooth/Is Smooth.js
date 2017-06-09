function isSmooth(arr) {
    var mid = middleOfArray(arr);
    return mid == arr[0] && mid == arr[arr.length - 1];
}
​
function middleOfArray(a) {
    var x = Math.round(a.length / 2) - 1;
    if (a.length % 2 == 0) {
        return a[x] + a[x + 1];
    } else {
        return a[x];
    }
}
​