# differentSymbolsNaive
﻿Given a string, find the number of different characters in it.

**Example**

For `s = "cabca"`, the output should be
`differentSymbolsNaive(s) = 3`.

There are `3` different characters `a`, `b` and `c`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string s**

    A string of lowercase latin letters.

    _Guaranteed constraints:_
    `3 ≤ s.length ≤ 15`.

*   **[output] integer**


## My Solution
```javascript
﻿function differentSymbolsNaive(s) {
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) == -1) arr.push(s[i]);
    }
    return arr.length;
}
​
```
