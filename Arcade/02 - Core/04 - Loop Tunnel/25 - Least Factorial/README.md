# Least Factorial
﻿Given an integer `n`, find the _minimal_ `k` such that

*   `k = m!` (where `m! = 1 * 2 * ... * m`) for some integer `m`;
*   `k >= n`.

In other words, find the smallest factorial which is not less than `n`.

**Example**

For `n = 17`, the output should be
`leastFactorial(n) = 24`.

`17 < 24 = 4! = 1 * 2 * 3 * 4`, while `3! = 1 * 2 * 3 = 6 < 17`).

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive integer.

    _Guaranteed constraints:_
    `1 ≤ n ≤ 120`.

*   **[output] integer**


## My Solution
```javascript
﻿function leastFactorial(n) {
    var index = 1;
    var k = 1;
    while (k < n) {
        index++;
        k *= index;
    }
    return k;
}
​
```
