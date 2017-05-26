# arrayChange
﻿You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

**Example**

For `inputArray = [1, 1, 1]`, the output should be
`arrayChange(inputArray) = 3`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    _Guaranteed constraints:_
    `3 ≤ inputArray.length ≤ 10<sup>5</sup>`,
    `-10<sup>5</sup> ≤ inputArray[i] ≤ 10<sup>5</sup>`.

*   **[output] integer**

    The minimal number of moves needed to obtain a strictly increasing sequence from `inputArray`.
    It's guaranteed that for the given test cases the answer always fits signed `32`-bit integer type.


## My Solution
```javascript
﻿function arrayChange(inputArray) {
    var moves = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i + 1] <= inputArray[i]) {
            var delta = inputArray[i] - inputArray[i + 1] + 1;
            moves += delta;
            inputArray[i + 1] += delta;
        }
    }
    return moves;
}
​
```
