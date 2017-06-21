# improperFractionToMixed
﻿Given a [reduced](keyword://reduced-fraction) [improper](keyword://proper-fraction) fraction output it as a reduced [mixed](keyword://mixed-fraction) fraction.

**Example**

For `a = [7, 2]`, the output should be
`improperFractionToMixed(a) = [3, 1, 2]`.

Explanation: `7/2 = 3 + 1/2`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    Array of two positive integers representing a reduced improper fraction `a[0] / a[1]`.

    _Guaranteed constraints:_
    `2 ≤ a[i] ≤ 25`.

*   **[output] array.integer**

    Array of three integers representing the reduced mixed fraction equal to `a` in the form `b[0] + b[1] / b[2]`.


## My Solution
```javascript
﻿function improperFractionToMixed(a) {
​
  var b = [Math.floor(a[1] / a[0])];
  b.push(a[0] - a[1] * b[0]);
  b.push(a[1]);
​
  return b;
}
​
```
