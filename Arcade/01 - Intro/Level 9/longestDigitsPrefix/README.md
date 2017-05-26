# longestDigitsPrefix
﻿Given a string, output its longest [prefix](keyword://string-prefix) which contains only digits.

**Example**

For `inputString="123aa1"`, the output should be
`longestDigitsPrefix(inputString) = "123"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    _Guaranteed constraints:_
    `3 ≤ inputString.length ≤ 35`.

*   **[output] string**


## My Solution
```javascript
﻿function longestDigitsPrefix(inputString) {
    var pre = "";
    for (var i = 0; i < inputString.length; i++) {
        var c = inputString.charCodeAt(i);
        if (!(c >= 48 && c <= 57)) break;
        pre += inputString[i];
    }
    return pre;
}
​
```
