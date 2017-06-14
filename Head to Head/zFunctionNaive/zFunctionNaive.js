function zFunctionNaive(s) {
    var arr = s.split("");
    var res = [];
    for (var i = 0; i < s.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (s.charAt(j) == arr[j]) {
                count++;
            } else {
                break;
            }
        }
        res.push(count);
        arr.splice(0, 1);
    }
    return res;
}
​