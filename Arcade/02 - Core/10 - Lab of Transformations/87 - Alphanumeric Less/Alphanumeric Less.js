function alphanumericLess(s1, s2) {
    var t1 = tokenize(s1);
    var t2 = tokenize(s2);
    console.log(t1, t2);
    return alphaComp(t1, t2);
}
​
function alphaComp(a1, a2) {
    var LESS = true;
    var GREATER = false;
    var diffLengths = a1.length != a2.length;
    var minLength = Math.min(a1.length, a2.length);
    for (var i = 0; i < minLength; i++) {
        var a = a1[i];
        var b = a2[i];
        var an = parseInt(a);
        var bn = parseInt(b);
        if (isNaN(an)) {
            if (isNaN(bn)) {
                // both a and b are strings
                if (a != b) return a < b;
            } else {
                // a is a string, b is a number
                return GREATER;
            }
        } else {
            if (isNaN(bn)) {
                // a is a number, b is a string
                return LESS;
            } else {
                // both a and b are numbers
                if (an != bn) return an < bn;
            }
        }
    }