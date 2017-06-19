function caesarBoxCipherEncoding(inputString) {
    var message = "";
    var sq = Math.sqrt(inputString.length);
    for (var i = 0; i < sq; i++) {
        var offset = 0;
        for (var j = 0; j < sq; j++) {
            message += inputString.charAt(i + offset);
            offset += sq;
        }
    }
    return message;
}
​