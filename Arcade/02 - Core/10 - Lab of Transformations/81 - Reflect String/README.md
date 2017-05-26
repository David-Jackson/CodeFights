# Reflect String
﻿Define an _alphabet reflection_ as follows: `a` turns into `z`, `b` turns into `y`, `c` turns into `x`, ..., `n` turns into `m`, `m` turns into `n`, ..., `z` turns into `a`.

Define a _string reflection_ as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

**Example**

For `inputString = "name"`, the output should be
`reflectString(inputString) = "mznv"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A string of lowercase characters.

    _Guaranteed constraints:_
    `3 ≤ inputString.length ≤ 10`.

*   **[output] string**


## My Solution
```javascript
﻿function reflectString(inputString) {
    var res = "";
    for (var i = 0; i < inputString.length; i++) {
        res += String.fromCharCode(
            122 - (inputString.charCodeAt(i) - 97)
        );
    }
    return res;
}
​
```
