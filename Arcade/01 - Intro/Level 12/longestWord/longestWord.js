function longestWord(text) {
    var maxWord = "";
    var word = "";
    var isLetter = function(x) {
        var c = x.charCodeAt(0);
        return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
    }
    for (var i = 0; i < text.length; i++) {
        if (isLetter(text[i])) {
            word += text[i];
        } else {
            if (word.length > maxWord.length) {
                maxWord = word;
            }
            word = "";
        }
    }
    if (word.length > maxWord.length) {
        maxWord = word;
    }
    return maxWord;
}
​