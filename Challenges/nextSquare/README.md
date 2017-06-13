# nextSquare
﻿Given an integer `n`, return the smallest integer `a`, such that `a` is a square of some integer and is greater than `n`.

**Example**

For `n = 5`, the output should be
`nextSquare(n) = 9`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n < 2<sup>31</sup>`.

*   **[output] integer**

    The smallest square that is greater than `n`.


## My Solution
```javascript
﻿function nextSquare(n) {
    var x = Math.floor(Math.sqrt(n)) + 1;
    return x * x;
}
​
```
