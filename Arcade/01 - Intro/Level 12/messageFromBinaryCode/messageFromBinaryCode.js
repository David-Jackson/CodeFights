function messageFromBinaryCode(code) {
    var msg = "";
    for (var i = 0; i < code.length; i = i + 8) {
        var b = code.substring(i, i + 8);
        msg += String.fromCharCode(parseInt(b, 2));
    }
    return msg;
}
​