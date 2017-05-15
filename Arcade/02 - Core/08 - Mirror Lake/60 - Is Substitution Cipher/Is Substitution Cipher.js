function isSubstitutionCipher(string1, string2) {
    var map1 = {};
    var map2 = {};
    for (var i = 0; i < string1.length; i++) {
        var c1 = string1.charAt(i);
        var c2 = string2.charAt(i);
        if (map1[c1]) {
            if (map1[c1] != c2) return false;
        } else {
            map1[c1] = c2;
        }
        if (map2[c2]) {
            if (map2[c2] != c1) return false;
        } else {
            map2[c2] = c1;
        }
    }
    return true;
}
​