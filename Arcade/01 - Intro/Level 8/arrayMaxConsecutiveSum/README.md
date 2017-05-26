# arrayMaxConsecutiveSum
﻿Given array of integers, find the maximal possible sum of some of its `k` consecutive elements.

**Example**

For `inputArray = [2, 3, 5, 1, 6]` and `k = 2`, the output should be
`arrayMaxConsecutiveSum(inputArray, k) = 8`.
All possible sums of `2` consecutive elements are:

*   `2 + 3 = 5`;
*   `3 + 5 = 8`;
*   `5 + 1 = 6`;
*   `1 + 6 = 7`.
    Thus, the answer is `8`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    Array of positive integers.

    _Guaranteed constraints:_
    `3 ≤ inputArray.length ≤ 10<sup>5</sup>`,
    `1 ≤ inputArray[i] ≤ 1000`.

*   **[input] integer k**

    An integer (not greater than the length of `inputArray`).

    _Guaranteed constraints:_
    `1 ≤ k ≤ inputArray.length`.

*   **[output] integer**

    The maximal possible sum.


## My Solution
```javascript
﻿function arrayMaxConsecutiveSum(inputArray, k) {
    var max = 0;
    for (var i = 0; i < inputArray.length + 1 - k; i++) {
        var sum = 0;
        for (var j = i; j < i + k; j++) {
            sum += inputArray[j];
        }
        if (sum > max) max = sum;
    }
    return max;
}
​
```
