function sumUpNumbers(inputString) {
    var sum = 0;
    var num = 0;
    var isNumber = function(x) {
        var c = x.charCodeAt(0);
        return (c >= 48 && c <= 57);
    }
    for (var i = 0; i < inputString.length; i++) {
        if (isNumber(inputString[i])) {
            num *= 10;
            num += parseInt(inputString[i]);
        } else {
            sum += num;
            num = 0;
        }
    }
    sum += num;
    return sum;
}
​