# myMaxOfThree
﻿Find the largest number from the given three integers.

**Example**

For `a = 3`, `b = 2` and `c = 4`, the output should be
`myMaxOfThree(a, b, c) = 4`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer a**

    _Guaranteed constraints:_
    `-100 ≤ a ≤ 100`.

*   **[input] integer b**

    _Guaranteed constraints:_
    `-100 ≤ b ≤ 100`.

*   **[input] integer c**

    _Guaranteed constraints:_
    `-100 ≤ c ≤ 100`.

*   **[output] integer**

    Max of `a`, `b` and `c`.


## My Solution
```javascript
﻿function myMaxOfThree(a, b, c) {
    return Math.max(...[a,b,c]);
}
​
```
