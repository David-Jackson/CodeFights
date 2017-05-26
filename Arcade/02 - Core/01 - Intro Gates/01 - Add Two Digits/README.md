# Add Two Digits
﻿You are given a two-digit integer `n`. Return the sum of its digits.

**Example**

For `n = 29`, the output should be
`addTwoDigits(n) = 11`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive two-digit integer.

    _Guaranteed constraints:_
    `10 ≤ n ≤ 99`.

*   **[output] integer**

    The sum of the first and second digits of the input number.


## My Solution
```javascript
﻿function addTwoDigits(n) {
    var sum = 0;
    while (n > 0) {
        var mod = n % 10;
        sum += mod;
        n = (n - mod) / 10;
    }
    return sum;
}
​
```
