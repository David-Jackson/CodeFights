function reflectString(inputString) {
    var res = "";
    for (var i = 0; i < inputString.length; i++) {
        res += String.fromCharCode(
            122 - (inputString.charCodeAt(i) - 97)
        );
    }
    return res;
}
​