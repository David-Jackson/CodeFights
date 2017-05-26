# Second-Rightmost Zero Bit
﻿Presented with the integer `n`, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of `2<sup>position_of_the_found_bit</sup>`.

**Example**

For `n = 37`, the output should be
`secondRightmostZeroBit(n) = 8`.

`37<sub>10</sub> = 10**<font color="red">0</font>**101<sub>2</sub>`. The second rightmost zero bit is at position `3` (0-based) from the right in the binary representation of `n`.
Thus, the answer is `2<sup>3</sup> = 8`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `4 ≤ n ≤ 2<sup>30</sup>`.

*   **[output] integer**


## My Solution
```javascript
﻿function secondRightmostZeroBit(n) {
  return -~((n-~(n^(n+1))/2)^(n-~(n^(n+1))/2+1))/2 ;
}
​
```
