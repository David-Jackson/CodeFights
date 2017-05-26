# Strings Construction
﻿How many strings equal to `A` can be constructed using letters from the string `B`? Each letter can be used only once and in one string only.

**Example**

For `A = "abc"` and `B = "abccba"`, the output should be
`stringsConstruction(A, B) = 2`.

We can construct `2` strings `A` with letters from `B`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string A**

    String to construct, `A` contains only lowercase English letters.

    _Guaranteed constraints:_
    `3 ≤ A.length ≤ 10`.

*   **[input] string B**

    String containing needed letters, `B` contains only lowercase English letters.

    _Guaranteed constraints:_
    `3 ≤ B.length ≤ 50`.

*   **[output] integer**


## My Solution
```javascript
﻿function stringsConstruction(A, B) {
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
```
