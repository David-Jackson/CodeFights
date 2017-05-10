function validTime(time) {
    var arr = time.split(":");
    if (arr.length != 2 ||
        arr[0].length != 2 ||
        arr[1].length != 2) return false;
    var h = parseInt(arr[0]);
    var m = parseInt(arr[1]);
    return h >= 0 && h < 24 && m >= 0 && m < 60;
}
​