# properOrImproper
﻿Determine whether a given fraction is [proper](keyword://proper-fraction).

**Example**

For `a = [7, 2]`, the output should be
`properOrImproper(a) = "Improper"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    Array of two integers representing a fraction `a[0] / a[1]`.

    _Guaranteed constraints:_
    `-10 ≤ a[i] ≤ 10`,
    `a[i] ≠ 0`.

*   **[output] string**

    `"Proper"` if `a` contains a proper fraction, `"Improper"` otherwise.


## My Solution
```javascript
﻿function properOrImproper(a) {
​
  if (Math.abs(a[0] / a[1]) < 1) {
    return 'Proper';
  }
  return  'Improper' ;
}
​
```
