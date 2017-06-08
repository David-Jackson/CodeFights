function regularBracketSequence1(sequence) {
    var d = 0;
    for (var i in sequence) {
        var c = sequence.charAt(i);
        d += ((c == "(") ? 1 : -1);
        if (d < 0) return false;
    }
    return d == 0;
}
​