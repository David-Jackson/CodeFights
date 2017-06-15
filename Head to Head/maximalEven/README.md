# maximalEven
﻿Pick-out the largest even number from an array of integers

**Example**

For `inputArray = [4, 3, 6, 8, 2, 4]`, the output should be
`maximalEven(inputArray) = 8`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    An array of positive integers, it's guaranteed that `inputArray` contains at least one even integer.

    _Guaranteed constraints:_
    `2 ≤ inputArray.length ≤ 10`,
    `0 ≤ inputArray[i] ≤ 30`.

*   **[output] integer**

    The maximal even element of `inputArray`.


## My Solution
```javascript
﻿function maximalEven(inputArray) {
    inputArray.sort(function(a, b) {return a <})
    for (var i in inputArray) {
        if (inputArray[i] % 2 == 0) return inputArray[i];
    }
}
​
```
