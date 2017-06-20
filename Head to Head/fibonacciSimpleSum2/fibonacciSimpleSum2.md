For a given positive integer `n` determine if it can be represented as a sum of two [Fibonacci numbers](keyword://fibonacci-sequence) (possibly equal).

**Example**

*   For `n = 1`, the output should be
    `fibonacciSimpleSum2(n) = true`.

    Explanation: `1 = 0 + 1 = F<sub>0</sub> + F<sub>1</sub>`.

*   For `n = 11`, the output should be
    `fibonacciSimpleSum2(n) = true`.

    Explanation: `11 = 3 + 8 = F<sub>4</sub> + F<sub>6</sub>`.

*   For `n = 60`, the output should be
    `fibonacciSimpleSum2(n) = true`;

*   For `n = 66`, the output should be
    `fibonacciSimpleSum2(n) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n < 2 · 10<sup>9</sup>`.

*   **[output] boolean**

    `true` if `n` can be represented as `F<sub>i</sub> + F<sub>j</sub>`, `false` otherwise.