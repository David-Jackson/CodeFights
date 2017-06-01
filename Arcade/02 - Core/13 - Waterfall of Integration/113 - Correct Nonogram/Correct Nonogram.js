function correctNonogram(size, nonogramField) {
    
    function noDashesAndParseInt(acc, val) {
        if (val != "-") acc.push(parseInt(val));
        return acc;
    }
    
    function nonogramReduce(acc, val, index, arr) {
        if (val == "#") {
            acc[acc.length - 1] += 1;
        } else {
            acc.push(0);
        }
        return acc;
    }
    
    function arrEqual(a1, a2) {
        if (a1.length != a2.length) return false;
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] != a2[i]) return false;
        }
        return true;
    }
    
    // check rows
    for (var i = nonogramField.length - size; i < nonogramField.length; i++) {
        var expected = nonogramField[i]
            .slice(0, nonogramField[i].length - size)
            .reduce(noDashesAndParseInt, []);
        var actual = nonogramField[i]
            .slice(expected.length, nonogramField[i].length)
            .reduce(nonogramReduce, [0]).filter(n => n != 0);
        if (!arrEqual(expected, actual)) return false;
    }
    
    // check cols
    for (var j = nonogramField[0].length - size; j < nonogramField[0].length; j++) {
        var expected = [];
        var actual = [];
        for (var i = 0; i < nonogramField.length; i++) {
            (
                (i < nonogramField.length - size) ? expected : actual
            ).push(nonogramField[i][j]);
        }
        expected = expected.reduce(noDashesAndParseInt, []);
        actual = actual.reduce(nonogramReduce, [0]).filter(n => n != 0);
        if (!arrEqual(expected, actual)) return false;
    }
    
    return true;
}
​