# kthDigit
﻿Given an integer, find its `k<sup>th</sup>` digit.

**Example**

For `n = 578943` and `k = 2`, the output should be
`kthDigit(n, k) = 7`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `10<sup>5</sup> ≤ n ≤ 10<sup>6</sup>`.

*   **[input] integer k**

    A non-negative integer.

    _Guaranteed constraints:_
    `1 ≤ k ≤ 7`.

*   **[output] integer**

    `k<sup>th</sup>` digit of the given number or `-1` there are less than k digits.


## My Solution
```javascript
﻿function kthDigit(n, k) {
​
  var numDigits = 0, number = n;
  while (number) {
    numDigits++;
    number =  Math.floor(number / 10) ;
  }
​
  var indexFromLast = numDigits - k + 1;
​
  while (n) {
    if (--indexFromLast === 0) {
      return n % 10;
    }
    n = Math.floor(n / 10);
  }
​
  return -1;
}
​
```
