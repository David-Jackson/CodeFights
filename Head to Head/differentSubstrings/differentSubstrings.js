﻿function differentSubstrings(inputString) {
    var vals = [];
    for (var i = 0; i < inputString.length; i++) {
        for (var j = i + 1; j <= inputString.length; j++) {
            var sub = inputString.substring(i, j);
            console.log(sub);
            if (vals.indexOf(sub) == -1) vals.push(sub);
        }
    }
    console.log(vals);
    return vals.length;
}
​