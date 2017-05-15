function stringsConstruction(A, B) {
    var countChars = function(str) {
        var res = [];
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (!res[c]) res[c] = 0;
            res[c] += 1
        }
        return res;
    }
    var aChars = countChars(A);
    var bChars = countChars(B);
    var max = Infinity;
    
    console.log(aChars);
    console.log(bChars);
    
    for (var i = 0; i < aChars.length; i++) {
        if (aChars[i]) {
            if (!bChars[i]) bChars[i] = 0;
            max = Math.min(max, bChars[i] / aChars[i]);
        }
    }
    return Math.floor(max);
}