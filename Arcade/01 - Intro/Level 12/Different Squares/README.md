# Different Squares
﻿Given a rectangular matrix containing only digits, calculate the number of different `2 × 2` squares in it.

**Example**

For

```
matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]

```

the output should be
`differentSquares(matrix) = 6`.

Here are all `6` different `2 × 2` squares:

*   1 2
    2 2
*   2 1
    2 2
*   2 2
    2 2
*   2 2
    1 2
*   2 2
    2 3
*   2 3
    2 1

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer matrix**

    _Guaranteed constraints:_
    `1 ≤ matrix.length ≤ 100`,
    `1 ≤ matrix[i].length ≤ 100`,
    `0 ≤ matrix[i][j] ≤ 9`.

*   **[output] integer**

    The number of different `2 × 2` squares in `matrix`.


## My Solution
```javascript
﻿function differentSquares(matrix) {
    var hist = [];
    var count = 0;
    var matrixToNum = function(m) {
        var num = 0;
        for (var i = 0; i < m.length; i++) {
            for (var j = 0; j < m[i].length; j++) {
                num *= 10;
                num += m[i][j];
            }
        }
        return num;
    }
    for (var i = 0; i < matrix.length - 1; i++) {
        for (var j = 0; j < matrix[i].length - 1; j++) {
            var n = matrixToNum([
                [matrix[i][j], matrix[i][j + 1]],
                [matrix[i + 1][j], matrix[i + 1][j + 1]]
            ]);
            if (hist.indexOf(n) == -1) {
                hist.push(n);
                count++;
            }
        }
    }
    return count;
}s
```
