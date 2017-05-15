function integerToStringOfFixedWidth(number, width) {
    var res = "";
    while (res.length < width) {
        var r = number % 10;
        res = r + res;
        number -= r;
        number /= 10;
    }
    return res;
}
​