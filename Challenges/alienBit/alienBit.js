function alienBit(abit) {
    var str = "";
    for (var i = 2; i < abit.length; i = i + 3) {
        var c = parseInt(abit.substr(i, 3));
        str += String.fromCharCode(c);
    }
    return str;
}
​