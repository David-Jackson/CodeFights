# digitSumsDifference
﻿Given an integer `n`, find the difference between the sums of its even and odd digits.

**Example**

*   For `n = 412`, the output should be
    `digitSumsDifference(n) = 5`;
*   For `n = 1203`, the output should be
    `digitSumsDifference(n) = -2`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `23 ≤ n ≤ 10<sup>7</sup>`.

*   **[output] integer**


## My Solution
```javascript
﻿function digitSumsDifference(n) {
​
  var result = 0;
  while (n) {
    var digit = n % 10;
    if (digit % 2 === 1) {
      result -=  digit ;
    }
    else {
      result += digit;
    }
    n = Math.floor(n / 10);
  }
​
  return result;
}
​
```
