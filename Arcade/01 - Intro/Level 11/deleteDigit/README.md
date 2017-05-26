# deleteDigit
﻿Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

**Example**

*   For `n = 152`, the output should be
    `deleteDigit(n) = 52`;
*   For `n = 1001`, the output should be
    `deleteDigit(n) = 101`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `10 ≤ n ≤ 10<sup>6</sup>`.

*   **[output] integer**


## My Solution
```javascript
﻿function deleteDigit(n) {
    var digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10)
    }
    digits.reverse();
    console.log(digits);
    var max = 0;
    for (var i = 0; i < digits.length; i++) {
        var num = 0;
        for (var j = 0; j < digits.length; j++) {
            if (i == j) continue;
            num *= 10;
            num += digits[j];
        }
        if (num > max) max = num;
    }
    return max;
}
​
```
