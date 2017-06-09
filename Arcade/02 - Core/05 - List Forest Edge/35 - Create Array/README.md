# Create Array
﻿Given an integer `size`, return array of length `size` filled with `1`s.

**Example**

For `size = 4`, the output should be
`createArray(size) = [1, 1, 1, 1]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer size**

    A positive integer.

    _Guaranteed constraints:_
    `1 ≤ size ≤ 10`.

*   **[output] array.integer**


## My Solution
```javascript
﻿function createArray(size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(1);
    }
    return arr;
}
​
```
