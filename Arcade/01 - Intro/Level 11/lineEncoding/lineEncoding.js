function lineEncoding(s) {
    s = s.split("");
    var arr = [];
    var str = "";
    var res = "";
    var prev = s[0];
    while (s.length > 0) {
        if (s[0] == prev) {
            str += s[0];
        } else {
            arr.push(str);
            str = s[0];
        }
        prev = s[0];
        s.splice(0,1);
    }
    arr.push(str);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == 1) {
            res += arr[i];
        } else {
            res += arr[i].length;
            res += arr[i][0];
        }
    }
    return res;