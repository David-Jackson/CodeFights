Given a non-negative integer `k`, you task is to calculate the result of the bitwise OR operation of all the integers from `0` to `k`, inclusive.

**Example**

For `k = 5`, the output should be
`totalOr = 7`.

`0 | 1 | 2 | 3 | 4 | 5 = 0<sub>2</sub> | 1<sub>2</sub> | 10<sub>2</sub> | 11<sub>2</sub> | 100<sub>2</sub> | 101<sub>2</sub> = 111<sub>2</sub> = 7`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer k**

    _Guaranteed constraints:_
    `0 ≤ k < 2<sup>31</sup>`

*   **[output] integer**

    _Guaranteed constraints:_
    `result < 2<sup>31</sup>`