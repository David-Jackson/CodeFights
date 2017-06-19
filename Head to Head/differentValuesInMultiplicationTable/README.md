# differentValuesInMultiplicationTable
﻿Define a _multiplication table_ of size `n` by `m` as follows: such table consists of `n` rows and `m` columns. Cell on the intersection of the `i<sup>th</sup>` row and the `j<sup>th</sup>` column (`i, j > 0`) contains the value of `i * j`.

Given integers `n` and `m`, find the number of different values that are found in the table.

**Example**

For `n = 3` and `m = 2`, the output should be
`differentValuesInMultiplicationTable(n, m) = 5`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive integer.

    _Guaranteed constraints:_
    `1 ≤ n ≤ 20`.

*   **[input] integer m**

    A positive integer.

    _Guaranteed constraints:_
    `1 ≤ m ≤ 20`.

*   **[output] integer**


## My Solution
```javascript
﻿function differentValuesInMultiplicationTable(n, m) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= m; j++) {
            var p = i * j;
            if (arr.indexOf(p) == -1) arr.push(p);
        }
    }
    return arr.length;
}
​
```
