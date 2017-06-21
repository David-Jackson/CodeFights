# fractionMultiplication
﻿Implement a function that can multiply two fractions and produce a [reduced fraction](keyword://reduced-fraction).

**Example**

For `a = [3, 2]` and `b = [2, 5]`, the output should be
`fractionMultiplication(a, b) = [3, 5]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    Array `a` of length `2` representing fraction `a[0] / a[1]`.

    _Guaranteed constraints:_
    `2 ≤ a[i] ≤ 15`.

*   **[input] array.integer b**

    Array `b` of length `2` representing fraction `b[0] / b[1]`.

    _Guaranteed constraints:_
    `2 ≤ b[i] ≤ 15`.

*   **[output] array.integer**

    Product of `a` and `b` as a reduced fraction.


## My Solution
```javascript
﻿function fractionMultiplication(a, b) {
​
  var gcdEuclid = function(a, b) {
    if (!a) {
      return b;
    }
    return gcdEuclid(b % a, a);
  }
​
  var c = [a[0] * b[0], a[1] * b[1]],
      gcd = gcdEuclid(c[0], c[1]);
​
  c[0] /= gcd;
  c[1] /= gcd;
​
  return c;
}
​
```
