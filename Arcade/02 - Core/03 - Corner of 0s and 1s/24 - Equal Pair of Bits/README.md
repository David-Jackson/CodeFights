# Equal Pair of Bits
﻿You're given two integers, `n` and `m`. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of `2<sup>position_of_the_found_pair</sup>` (0-based).

**Example**

For `n = 10` and `m = 11`, the output should be
`equalPairOfBits(n, m) = 2`.

`10<sub>10</sub> = 10**<font color="red">1</font>**0<sub>2</sub>`, `11<sub>10</sub> = 10**<font color="red">1</font>**1<sub>2</sub>`, the position of the rightmost pair of equal bits is the bit at position `1` (0-based) from the right in the binary representations.
So the answer is `2<sup>1</sup> = 2`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `0 ≤ n ≤ 2<sup>30</sup>`.

*   **[input] integer m**

    _Guaranteed constraints:_
    `0 ≤ m ≤ 2<sup>30</sup>`.

*   **[output] integer**


## My Solution
```javascript
﻿function equalPairOfBits(n, m) {
  return n + m + 1 & ~m - n ;
}
​
```
