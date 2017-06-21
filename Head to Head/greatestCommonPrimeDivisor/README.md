# greatestCommonPrimeDivisor
﻿Define _GCPD_ (Greatest Common Prime Divisor) as the largest prime number that divides both given positive integers. Your task is to find _GCPD_ of the given integers `a` and `b`.

**Example**

*   For `a = 12` and `b = 18`, the output should be
    `greatestCommonPrimeDivisor(a, b) = 3`;
*   For `a = 12` and `b = 13`, the output should be
    `greatestCommonPrimeDivisor(a, b) = -1`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer a**

    _Guaranteed constraints:_
    `2 ≤ a ≤ 150`.

*   **[input] integer b**

    _Guaranteed constraints:_
    `2 ≤ b ≤ 150`.

*   **[output] integer**

    _GCPD_ of `a` and `b` or `-1` if it doesn't exist.


## My Solution
```javascript
﻿function greatestCommonPrimeDivisor(a, b) {
​
  var gcd = -1;
  for (var divisor = 2;  divisor <= Math.min(a, b) ; divisor++) {
    if (a % divisor === 0 && b % divisor === 0) {
      gcd = divisor;
    }
    while (a % divisor === 0) {
      a /= divisor;
    }
    while (b % divisor === 0) {
      b /= divisor;
    }
  }
​
  return gcd;
}
​
```
