function wordsRotationCc(words) {
    var res = [];
    for (var i = words[0].length - 1; i >= 0; i--) {
        var str = "";
        for (var j = 0; j < words.length; j++) {
            str += words[j].charAt(i);
        }
        res.push(str);
    }
    return res;
}
​