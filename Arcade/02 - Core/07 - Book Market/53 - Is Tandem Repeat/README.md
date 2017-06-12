# Is Tandem Repeat
﻿Determine whether the given string can be obtained by one concatenation of some string to itself.

**Example**

*   For `inputString = "tandemtandem"`, the output should be
    `isTandemRepeat(inputString) = true`;
*   For `inputString = "qqq"`, the output should be
    `isTandemRepeat(inputString) = false`;
*   For `inputString = "2w2ww"`, the output should be
    `isTandemRepeat(inputString) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    _Guaranteed constraints:_
    `3 ≤ inputString.length ≤ 20`.

*   **[output] boolean**

    `true` if `inputString` represents a string concatenated to itself, `false` otherwise.


## My Solution
```javascript
﻿function isTandemRepeat(inputString) {
    if (inputString.length % 2 != 0) return false;
    for (var i = 0; i < inputString.length / 2; i++) {
        if (inputString[i] != inputString[i + (inputString.length / 2)]) return false;
    }
    return true;
}
​
```
