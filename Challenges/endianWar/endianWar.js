function endianWar(expression) {
    var match = expression.match(/\d+/ig);
    for (var i = 0; i < match.length; i++) {
        match[i] = match[i].split("").reverse().join("");
    }
    return eval(match[0] + "+" + match[1] + "==" + match[2]);
}
​