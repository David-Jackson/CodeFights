function rangeBitCount(a, b) {
    var count = 0;
    for (var i = a; i <= b; i++) {
        var bin = i.toString(2);
        console.log(bin);
        for (var j = 0; j < bin.length; j++) {
            if (bin[j] == '1') count++;
        }
    }
    return count;
}
​