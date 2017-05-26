# Different Rightmost Bit
﻿You're given two integers, `n` and `m`. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of `2<sup>position_of_the_found_bit</sup>` (0-based).

**Example**

*   For `n = 11` and `m = 13`, the output should be
    `differentRightmostBit(n, m) = 2`.

    `11<sub>10</sub> = 10**<font color="red">1</font>**1<sub>2</sub>`, `13<sub>10</sub> = 11**<font color="red">0</font>**1<sub>2</sub>`, the rightmost bit in which they differ is the bit at position `1` (0-based) from the right in the binary representations.
    So the answer is `2<sup>1</sup> = 2`.

*   For `n = 7` and `m = 23`, the output should be
    `differentRightmostBit(n, m) = 16`.

    `7<sub>10</sub> = 111<sub>2</sub>`, `23<sub>10</sub> = 10111<sub>2</sub>`, i.e.

    ```
    00111
    10111

    ```

    So the answer is `2<sup>4</sup> = 16`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `0 ≤ n ≤ 2<sup>30</sup>`.

*   **[input] integer m**

    _Guaranteed constraints:_
    `0 ≤ m ≤ 2<sup>30</sup>`,
    `n ≠ m.`

*   **[output] integer**


## My Solution
```javascript
﻿function differentRightmostBit(n, m) {
  return (n ^ m) & -(n ^ m) ;
}
​
```
