# Extract Matrix Column
﻿Given a rectangular matrix and an integer `column`, return an array containing the elements of the `column<sup>th</sup>` column of the given matrix (the leftmost column is the `0<sup>th</sup>` one).

**Example**

For

```
matrix = [[1, 1, 1, 2], 
          [0, 5, 0, 4], 
          [2, 1, 3, 6]]

```

and `column = 2`, the output should be
`extractMatrixColumn(matrix, column) = [1, 0, 3]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer matrix**

    2-dimensional array of integers representing a rectangular matrix.

    _Guaranteed constraints:_
    `1 ≤ matrix.length ≤ 4`,
    `1 ≤ matrix[0].length ≤ 4`,
    `0 ≤ matrix[i][j] ≤ 300`.

*   **[input] integer column**

    An integer not greater than the number of `matrix` columns.

    _Guaranteed constraints:_
    `0 ≤ column ≤ matrix[i].length - 1`.

*   **[output] array.integer**


## My Solution
```javascript
﻿function extractMatrixColumn(matrix, column) {
    return matrix.map(n => n[column]);
}
​
```
