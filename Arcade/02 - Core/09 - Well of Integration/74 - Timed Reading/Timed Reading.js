function timedReading(maxLength, text) {
    var wordsRead = 0;
    var curWordLength = 0;
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (isLetterCode(c)) {
            curWordLength++;
        } else {
            if (curWordLength != 0 && curWordLength <= maxLength) {
                wordsRead++;
            }
            curWordLength = 0
        }
    }
    if (curWordLength != 0 && curWordLength <= maxLength) {
        wordsRead++;
    }
    return wordsRead;
}
​
function isLetterCode(x) {
    return (65 <= x && x <= 90) || (97 <= x && x <= 122);
}