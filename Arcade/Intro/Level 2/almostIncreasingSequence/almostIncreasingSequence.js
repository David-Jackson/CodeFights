function almostIncreasingSequence(sequence, skipIndex) {
    if (skipIndex === undefined) skipIndex = -1;
    var comp = [];
    for (var i = 0; i < sequence.length; i++) {
        if (i != skipIndex) comp.push(sequence[i]);
    }
    for (var i = 0; i < comp.length - 1; i++) {
        if (comp[i + 1] <= comp[i]) {
            if (skipIndex == -1) {
                return almostIncreasingSequence(sequence, i) || almostIncreasingSequence(sequence, i + 1);
            } else {
                return false;
            }
        }
    }
    return true;
}