# neighboringCells
﻿Given a rectangular matrix consisting of zeroes, replace each zero with the number of [neighboring](keyword://neighboring-elements-of-a-matrix) cells for that cell.

**Example**

For

```
matrix = [[0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]]

```

the output should be

```
neighboringCells(matrix) = [[2, 3, 2],
                            [3, 4, 3],
                            [2, 3, 2]]

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer matrix**

    A rectangular matrix of zeros.

    _Guaranteed constraints:_
    `1 ≤ matrix.length ≤ 5`,
    `1 ≤ matrix[0].length ≤ 5`.

*   **[output] array.array.integer**


## My Solution
```javascript
﻿function neighboringCells(matrix) {
    function nonValidCells(y, x) {
        var count = 0;
        if (y == 0) count++;
        if (y == matrix.length - 1) count++;
        if (x == 0) count++;
        if (x == matrix[0].length - 1) count++;
        return count;
    }
    return matrix.map(function(row, y) {
        return row.map(function(val, x) {
            return 4 - nonValidCells(y, x);
        });
    });
}
​
```
