function extraNumber(a, b, c) {
    var arr = [a, b, c];
    arr.sort();
    return (arr[0] == arr[1]) ? arr[2] : arr[0];
}
​