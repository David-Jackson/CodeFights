# Largest Number
﻿Given an integer `n`, return the largest number that contains exactly `n` digits.

**Example**

For `n = 2`, the output should be
`largestNumber(n) = 99`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n ≤ 7`.

*   **[output] integer**

    The largest integer of length `n`.


## My Solution
```javascript
﻿function largestNumber(n) {
    var num = 0;
    for (var i = 0; i < n; i++) {
        num *= 10;
        num += 9;
    }
    return num;
}
​
```
