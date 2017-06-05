﻿Determine if a number can be expressed as a sum of some consecutive positive integers.

**Example**

*   For `n = 9`, the output should be
    `isSumOfConsecutive(n) = true`.

    Explanation: It is possible to get `n = 9` in the following way: `2 + 3 + 4 = 9`.

*   For `n = 8`, the output should be
    `isSumOfConsecutive(n) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `2 ≤ n ≤ 40`.

*   **[output] boolean**

    `true` if it is possible to express `n` as a sum of some (at least two) consecutive positive integers, `false` otherwise.