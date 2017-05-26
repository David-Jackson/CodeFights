# digitDegree
﻿Let's define _digit degree_ of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

**Example**

*   For `n = 5`, the output should be
    `digitDegree(n) = 0`;
*   For `n = 100`, the output should be
    `digitDegree(n) = 1`.
    `1 + 0 + 0 = 1`.
*   For `n = 91`, the output should be
    `digitDegree(n) = 2`.
    `9 + 1 = 10` -> `1 + 0 = 1`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `5 ≤ n ≤ 10<sup>9</sup>`.

*   **[output] integer**


## My Solution
```javascript
﻿function digitDegree(n) {
    var sumOfDigits = function(x) {
        var sum = 0;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        return sum;
    }
    if (n < 10) return 0;
    return 1 + digitDegree(sumOfDigits(n));
}
​
```
