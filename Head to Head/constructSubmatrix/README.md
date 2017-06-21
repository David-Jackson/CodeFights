# constructSubmatrix
﻿Given a matrix, find its [submatrix](keyword://submatrix) obtained by deleting the specified rows and columns.

**Example**

For

```
matrix = [[1, 0, 0, 2], 
          [0, 5, 0, 1], 
          [0, 0, 3, 5]]

```

`rowsToDelete = [1]` and `columnsToDelete = [0, 2]`, the output should be

```
constructSubmatrix(matrix, rowsToDelete, columnsToDelete) = [[0, 2],
                                                             [0, 5]]

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer matrix**

    2-dimensional array of integers.

    _Guaranteed constraints:_
    `1 ≤ matrix.length ≤ 5`,
    `1 ≤ matrix[0].length ≤ 5`,
    `0 ≤ matrix[i][j] ≤ 15`.

*   **[input] array.integer rowsToDelete**

    Array of indices (0-based) of rows to be deleted.

    _Guaranteed constraints:_
    `0 ≤ rowsToDelete.length ≤ 2`,
    `0 ≤ rowsToDelete[i] < matrix.length`.

*   **[input] array.integer columnsToDelete**

    Array of indices (0-based) of columns to be deleted.

    _Guaranteed constraints:_
    `0 ≤ columnsToDelete.length ≤ 2`,
    `0 ≤ columnsToDelete[i] < matrix[0].length`.

*   **[output] array.array.integer**


## My Solution
```javascript
﻿function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {

  var res = [];
  var useRow = [];
  var useColumn = [];

  for (var i = 0; i < matrix.length; i++) {
    useRow.push(true);
  }
  for (var i = 0; i < matrix[0].length; i++) {
    useColumn.push(true);
  }

  for (var i = 0; i < rowsToDelete.length; i++) {
    useRow[rowsToDelete[i]] = false;
  }
  for (var i = 0; i < columnsToDelete.length; i++) {
    useColumn[columnsToDelete[i]] = false;
  }

  for (var i = 0; i < matrix.length; i++) {
    if ( useRow[i] ) {
      res.push([]);
      for (var j = 0; j < matrix[0].length; j++) {
        if (useColumn[j]) {
          res[res.length - 1].push(matrix[i][j]);
        }
      }
    }
  }

  return res;
}
```
