# isDigit
﻿Determine if the given character is a digit or not.

**Example**

*   For `symbol = '9'`, the output should be
    `isDigit(symbol) = true`;
*   For `symbol = '-'`, the output should be
    `isDigit(symbol) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] char symbol**

    A character which is either a digit or not.

*   **[output] boolean**

    `true` if `symbol` is a digit, `false` otherwise.


## My Solution
```javascript
﻿function isDigit(symbol) {
    var c = symbol.charCodeAt(0);
    return (c >= 48 && c <= 57);
}
​
```
