Given array of integers, check whether each integer, that occurs in it, is contained there the same number of times as any other integer from the given array.

**Example**

*   For `inputArray = [1, 2, 2, 1]`, the output should be
    `checkEqualFrequency(inputArray) = true`;
*   For `inputArray = [1, 2, 2, 3, 1, 3, 1, 3]`, the output should be
    `checkEqualFrequency(inputArray) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    _Guaranteed constraints:_
    `1 ≤ inputArray.length ≤ 5 · 10<sup>4</sup>`,
    `1 ≤ inputArray[i] ≤ 4 · 10<sup>8</sup>`.

*   **[output] boolean**