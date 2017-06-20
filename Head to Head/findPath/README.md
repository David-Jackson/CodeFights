# findPath
﻿You are given an `n × m` matrix, which contains all the integers from `1` to `n * m`, inclusive, each exactly once.

Initially you are standing in the cell containing the number `1`. On each turn you are allowed to move to an adjacent cell, i.e. to a cell that shares a common side with the one you are standing on now. It is prohibited to visit any cell more than once.

Check if it is possible to visit all the cells of the matrix in the order of increasing numbers in the cells, i.e. get to the cell with the number `2` on the first turn, then move to `3`, etc.

**Example**

*   For

    ```
    matrix = [[1, 4, 5], 
              [2, 3, 6]]

    ```

    the output should be
    `findPath(matrix) = true`;

*   For

    ```
    matrix = [[1, 3, 6], 
              [2, 4, 5]]

    ```

    the output should be
    `findPath(matrix) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer matrix**

    A non-empty 2-dimensional array of integers representing a rectangular matrix.

    _Guaranteed constraints:_
    `1 ≤ matrix.length ≤ 5`,
    `1 ≤ matrix[0].length ≤ 10`,
    `1 ≤ matrix[i][j] ≤ 25`.

*   **[output] boolean**


## My Solution
```javascript
﻿function findPath(matrix) {
​
  var positionX = -1,
      positionY = -1;
​
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 1) {
        positionX = i;
        positionY = j;
      }
    }
  }
  for (var i = 1; i < matrix.length * matrix[0].length; i++) {
    var found = false;
    var nextX = -1;
    var nextY = -1;
    for (var dx = -1; dx <= 1; dx++) {
      for (var dy = -1; dy <= 1; dy++) {
        if (dx * dy === 0) {
          if (positionX + dx >= 0 && positionX + dx < matrix.length
           && positionY + dy >= 0 && positionY + dy < matrix[0].length) {
            if (matrix[positionX + dx][positionY + dy] === i + 1) {
              found = true;
              nextX = positionX + dx;
```
