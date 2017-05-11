function createAnagram(s, t) {
    var sCount = charCount(s);
    var tCount = charCount(t);
    var diff = 0;
    for (var key in sCount) {
        diff += Math.abs(sCount[key] - tCount[key]);
    }
    return diff / 2;
}
​
function charCount(str) {
    var res = newAlphabetCharCodes();
    for (var i = 0; i < str.length; i++) {
        res[str.charCodeAt(i)] += 1;
    }
    return res;
}
         
function newAlphabetCharCodes() {
    var res = {};
    for (var i = 65; i <= 90; i++) {
        res[i] = 0;
    }
    return res;
}