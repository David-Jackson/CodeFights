function characterParity(symbol) {
    var c = symbol.charCodeAt(0);
    if (48 <= c && c <= 57) {
        return c % 2 == 0 ? "even" : "odd";
    }
    return "not a digit";
}
​