function isIPv4Address(inputString) {
    var res = false;
    var arr = inputString.split(".");
    if (arr.length != 4) return false;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i], arr[i] >= 0, arr[i] <= 255)
        if (arr[i] >= 0 && 
            arr[i] <= 255 && 
            arr[i] != "") {
            res = true;
        } else {
            res = false;
            break;
        }
    }
    return res;
}
​