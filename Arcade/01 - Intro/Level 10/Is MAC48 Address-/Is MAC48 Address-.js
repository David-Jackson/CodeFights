function isMAC48Address(inputString) {
    inputString = inputString.toUpperCase();
    var arr = inputString.split("-");
    for (var i = 0; i < arr.length; i++) {
        if (i > 5) return false;
        if (arr[i].length != 2) return false;
        for (var j = 0; j < arr[i].length; j++) {
            var c = arr[i].charCodeAt(j);
            if (!((c >= 65 && c <= 70) || (c >= 48 && c <= 57))) return false;
        }
    }
    return true;
}
​