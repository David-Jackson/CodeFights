function differentSymbolsNaive(s) {
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) == -1) arr.push(s[i]);
    }
    return arr.length;
}
​