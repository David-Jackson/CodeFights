# gcdNaive
﻿Calculate the [Greatest Common Divisor(GCD)](keyword://greatest-common-divisor) of two numbers.

**Example**

For `a = 4` and `b = 6`, the output should be
`gcdNaive(a, b) = 2`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer a**

    _Guaranteed constraints:_
    `1 ≤ a ≤ 500`.

*   **[input] integer b**

    _Guaranteed constraints:_
    `1 ≤ b ≤ 500`.

*   **[output] integer**

    _GCD_ of `a` and `b`.


## My Solution
```javascript
﻿function gcdNaive(a, b) {
​
  var gcd = 1;
  for (var divisor = 2; divisor <= Math.min(a, b); divisor++) {
    if ( a % divisor == 0 && b % divisor == 0 ) {
      gcd = divisor;
    }
  }
​
  return gcd;
}
​
```
