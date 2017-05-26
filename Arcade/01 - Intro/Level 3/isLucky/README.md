# isLucky
﻿Ticket numbers usually consist of an even number of digits. A ticket number is considered _lucky_ if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number `n`, determine if it's _lucky_ or not.

**Example**

*   For `n = 1230`, the output should be
    `isLucky(n) = true`;
*   For `n = 239017`, the output should be
    `isLucky(n) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A ticket number represented as a positive integer with an even number of digits.

    _Guaranteed constraints:_
    `10 ≤ n < 10<sup>6</sup>`.

*   **[output] boolean**

    `true` if `n` is a lucky ticket number, `false` otherwise.


## My Solution
```javascript
﻿function isLucky(n) {
    var s1 = 0,
        s2 = 0,
        p = 1;
    while (n > 0) {
        var d = n % 10;
        n = Math.floor(n / 10);
        if (p < n) {
            s1 += d;
        } else {
            s2 += d;
        }
        p *= 10;
    }
    return s1 == s2;
}
​
```
