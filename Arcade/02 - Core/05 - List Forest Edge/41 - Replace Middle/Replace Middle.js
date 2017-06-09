function replaceMiddle(arr) {
    if (arr.length % 2 == 0) {
        var x = (arr.length / 2) - 1;
        var mid = arr[x] + arr[x + 1];
        arr[x] = mid;
        arr.splice(x+1, 1);
    }
    return arr;
}