# differentSubstrings
﻿Given a string, find the number of different non-empty [substrings](keyword://substring) in it.

**Example**

For `inputString = "abac"`, the output should be
`differentSubstrings(inputString) = 9`.
They are:

```
"a", "b", "c",
"ab", ac", "ba",
"aba", "bac",
"abac"

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    _Guaranteed constraints:_
    `3 ≤ inputString.length ≤ 10`.

*   **[output] integer**


## My Solution
```javascript
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
```
