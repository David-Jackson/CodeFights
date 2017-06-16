# arraySumAdjacentDifference
﻿Given array of integers, find the sum of absolute differences of consecutive numbers.

**Example**

For `inputArray = [4, 7, 1, 2]`, the output should be
`arraySumAdjacentDifference(inputArray) = 10`.

*   `|4 - 7| = 3`;
*   `|7 - 1| = 6`;
*   `|1 - 2| = 1`

So, the answer is `3 + 6 + 1 = 10`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    _Guaranteed constraints:_
    `3 ≤ inputArray.length ≤ 10`,
    `1 ≤ inputArray[i] ≤ 15`.

*   **[output] integer**

    Sum of absolute differences of consecutive numbers from `inputArray`.


## My Solution
```javascript
﻿function arraySumAdjacentDifference(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        sum += Math.abs(inputArray[i] - inputArray[i + 1]);
    }
    return sum;
}
​
```
