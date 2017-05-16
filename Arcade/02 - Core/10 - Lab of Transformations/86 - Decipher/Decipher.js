function decipher(cipher) {
    var curStr = "";
    var res = "";
    for (var i = 0; i < cipher.length; i++) {
        curStr += cipher[i];
        var tmp = parseInt(curStr)
        if (97 <= tmp && tmp <= 122) {
            res += String.fromCharCode(tmp);
            curStr = "";
        }
    }
    return res;
}
​