function reverseParentheses(s) {
    while (s.indexOf("(") != -1) {
        // find last open parentheses
        var i = -1;
        while (s.indexOf("(", i + 1) != -1) {
            i = s.indexOf("(", i + 1);
        } 
        var j = s.indexOf(")", i + 1);
        s = s.substring(0, i) +
            s.substring(i + 1,j).split("").reverse().join("") +
            s.substring(j + 1, s.length);
    }
    return s;
}
​