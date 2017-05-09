function alphabeticShift(inputString) {
    var arr = inputString.split("");
    for (var i = 0; i < inputString.length; i++) {
        var code = inputString.charCodeAt(i);
        code += 1;
        if (code == 123) code = 97;
        arr[i] = String.fromCharCode(code);
    }
    return arr.join("");
}
​