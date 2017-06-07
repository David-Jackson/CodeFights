# Rows Rearranging
﻿Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).

**Example**

*   For

    ```
    matrix = [[2, 7, 1], 
              [0, 2, 0], 
              [1, 3, 1]]

    ```

    the output should be
    `rowsRearranging(matrix) = false`;

*   For

    ```
    matrix = [[6, 4], 
              [2, 2], 
              [4, 3]]

    ```

    the output should be
    `rowsRearranging(matrix) = true`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer matrix**

    A 2-dimensional array of integers.

    _Guaranteed constraints:_
    `1 ≤ matrix.length ≤ 10`,
    `1 ≤ matrix[0].length ≤ 10`,
    `-300 ≤ matrix[i][j] ≤ 300`.

*   **[output] boolean**


## My Solution
```javascript
﻿function rowsRearranging(matrix) {
    var index = 0;
    var sortByIndex = function(a, b) {
        return a[index] > b[index];
    }
    for (index = 0; index < matrix[0].length; index++) {
        matrix.sort(sortByIndex);
        var allGood = true;
        for (var i = 0; i < matrix[0].length; i++) {
            for (var j = 0; j < matrix.length - 1; j++) {
                if (matrix[j][i] >= matrix[j + 1][i]) {
                    allGood = false;
                    break;
                }
            }
            if (!allGood) break;
        }
        if (allGood) return true;
    }
    return false;
}
​
```
