# Character Parity
﻿Given a character, check if it represents an odd digit, an even digit or not a digit at all.

**Example**

*   For `symbol = '5'`, the output should be
    `characterParity(symbol) = "odd"`;
*   For `symbol = '8'`, the output should be
    `characterParity(symbol) = "even"`;
*   For `symbol = 'q'`, the output should be
    `characterParity(symbol) = "not a digit"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] char symbol**

*   **[output] string**


## My Solution
```javascript
﻿function characterParity(symbol) {
    var c = symbol.charCodeAt(0);
    if (48 <= c && c <= 57) {
        return c % 2 == 0 ? "even" : "odd";
    }
    return "not a digit";
}
​
```
