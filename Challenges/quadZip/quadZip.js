function quadZip(one, two, three, four) {
    var arr = [one, two, three, four];
    var maxLength = Math.max(
        one.length,
        two.length,
        three.length,
        four.length
    );
    var res = "";
    for (var i = 0; i < maxLength; i++) {
        for (var j = 0; j < arr.length; j++) {
            res += (arr[j].length > i) ? arr[j][i] : "";
        }
    }
    return res;
}
​