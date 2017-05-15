function alphabetSubsequence(s) {
    for (var i = 0; i < s.length - 1; i++) {
        if (s.charCodeAt(i) >= s.charCodeAt(i + 1)) return false;
    }
    return true;
}
​