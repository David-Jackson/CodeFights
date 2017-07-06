function lookAndSaySequenceNextElement(element) {
    var res = "";
    var count = 1;
    var digit = element[0];
    for (var i = 1; i < element.length; i++) {
        if (digit == element[i]) {
            count++;
        } else {
            res += count + digit;
            digit = element[i];
            count = 1;
        }
    }
    return res + count + digit;
}
​