# extractEachKth
﻿Given array of integers, remove each `k<sup>th</sup>` element from it.

**Example**

For `inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` and `k = 3`, the output should be
`extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    _Guaranteed constraints:_
    `5 ≤ inputArray.length ≤ 15`,
    `-20 ≤ inputArray[i] ≤ 20`.

*   **[input] integer k**

    _Guaranteed constraints:_
    `1 ≤ k ≤ 10`.

*   **[output] array.integer**

    `inputArray` without elements `k - 1`, `2k - 1`, `3k - 1` etc.


## My Solution
```javascript
﻿function extractEachKth(inputArray, k) {
    var arr = [];
    for (var i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k != 0) arr.push(inputArray[i]);
    }
    return arr;
}
​
```
