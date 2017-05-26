# evenDigitsOnly
﻿Check if all digits of the given integer are even.

**Example**

*   For `n = 248622`, the output should be
    `evenDigitsOnly(n) = true`;
*   For `n = 642386`, the output should be
    `evenDigitsOnly(n) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n ≤ 10<sup>9</sup>`.

*   **[output] boolean**

    `true` if all digits of `n` are even, `false` otherwise.


## My Solution
```javascript
﻿function evenDigitsOnly(n) {
    while (n > 0) {
        if ((n % 10) % 2 != 0) return false;
        n = Math.floor(n / 10);
    }
    return true;
}
​
```
