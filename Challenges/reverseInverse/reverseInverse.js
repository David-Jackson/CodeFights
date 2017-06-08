function reverseInverse(s) {
    function processWord(w, x) {
        var res = "";
        var arr = w.split("").reverse();
        for (var i = 0; i < arr.length; i++) {
            if (s[i + x].toLowerCase() == s[i + x]) {
                res += arr[i].toUpperCase();
            } else {
                res += arr[i].toLowerCase();
            }
        }
        return res;
    }
    
    var res = "";
    var curStr = "";
    var isWord = true;
    
    for (var i in s) {
        var c = s.toLowerCase().charAt(i);
        if (('a' <= c && c <= 'z') || ('0' <= c && c <= '9')) {
            if (isWord) {
                curStr += c;
            } else {
                res += curStr;