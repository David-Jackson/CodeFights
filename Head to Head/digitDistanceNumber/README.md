# digitDistanceNumber
﻿*   Let the integer `n` be represented by digits `a<sub>1</sub>`, `a<sub>2</sub>`, ..., `a<sub>k</sub>` (the digits are listed from left to right in the order they appear in the decimal representation of `n`).
*   Define `b<sub>i</sub> = |a<sub>i + 1</sub> - a<sub>i</sub>|`.
*   Construct the number from the digits `b<sub>1</sub>`, `b<sub>2</sub>`, ..., `b<sub>k - 1</sub>` (in that order). Let's call the resulting value a _digit distance number_ for `n`.

**Example**

*   For `n = 2744`, the output should be
    `digitDistanceNumber(n) = 530`.

    *   `b<sub>1</sub> = |a<sub>2</sub> - a<sub>1</sub>| = |7 - 2| = 5`
    *   `b<sub>2</sub> = |a<sub>3</sub> - a<sub>2</sub>| = |4 - 7| = 3`
    *   `b<sub>3</sub> = |a<sub>4</sub> - a<sub>3</sub>| = |4 - 4| = 0`
*   For `n = 330`, the output should be
    `digitDistanceNumber(n) = 3`.

    Formally, it is `03` but leading zeroes should be removed.

*   For `n = 333`, the output should be
    `digitDistanceNumber(n) = 0`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive integer consisting of **at least two digits**.

    _Guaranteed constraints:_
    `10 ≤ n ≤ 10<sup>9</sup>`.

*   **[output] integer**

    The digit distance number for `n`.


## My Solution
```javascript
﻿function digitDistanceNumber(n) {
    var digits = [];
    var res = 0;
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    digits = digits.reverse();
    for (var i = 0; i < digits.length - 1; i++) {
        res *= 10;
        res += Math.abs(digits[i] - digits[i + 1])
    }
    return res;
}
​
```
