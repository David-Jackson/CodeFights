function fractionComparison(a, b) {
    var comp = (a[0] / a[1]) - (b[0] / b[1]);
    if (comp == 0) {
        return "=";
    } else if (comp > 0) {
        return ">";
    } else if (comp < 0) {
        return "<";
    } 
}
​