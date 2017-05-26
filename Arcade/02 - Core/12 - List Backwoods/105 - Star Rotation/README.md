# Star Rotation
﻿Consider a `(2k+1) × (2k+1)` square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle column and middle row a _star_. Given the coordinates of the star's `center` in the `matrix` and its `width`, rotate it `45 · t` degrees clockwise preserving position of all matrix elements that do not belong to the _star_.

**Example**

*   For

    ```
    matrix = [[1, 0, 0, 2, 0, 0, 3],
              [0, 1, 0, 2, 0, 3, 0],
              [0, 0, 1, 2, 3, 0, 0],
              [8, 8, 8, 9, 4, 4, 4],
              [0, 0, 7, 6, 5, 0, 0],
              [0, 7, 0, 6, 0, 5, 0],
              [7, 0, 0, 6, 0, 0, 5]]
    ```

    `width = 7`, `center = [3, 3]` and `t = 1`, the output should be

    ```
    starRotation(matrix, width, center, t) = [[8, 0, 0, 1, 0, 0, 2],
                                              [0, 8, 0, 1, 0, 2, 0],
                                              [0, 0, 8, 1, 2, 0, 0],
                                              [7, 7, 7, 9, 3, 3, 3],
                                              [0, 0, 6, 5, 4, 0, 0],
                                              [0, 6, 0, 5, 0, 4, 0],
                                              [6, 0, 0, 5, 0, 0, 4]]
    ```

*   For

    ```
    matrix = [[1, 0, 0, 2, 0, 0, 3],
              [0, 1, 0, 2, 0, 3, 0],
              [0, 0, 1, 2, 3, 0, 0],
              [8, 8, 8, 9, 4, 4, 4],
              [0, 0, 7, 6, 5, 0, 0]]
    ```

    `width = 3`, `center = [1, 5]` and `t = 81`, the output should be

    ```
    starRotation(matrix, width, center, t) = [[1, 0, 0, 2, 0, 0, 0],
                                              [0, 1, 0, 2, 3, 3, 3],
                                              [0, 0, 1, 2, 0, 0, 0],
                                              [8, 8, 8, 9, 4, 4, 4],
                                              [0, 0, 7, 6, 5, 0, 0]]
    ```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer matrix**

    A two-dimensional array of integers.

    _Guaranteed constraints:_
    `3 ≤ matrix.length ≤ 15`,
    `3 ≤ matrix[i].length ≤ 15`,
    `matrix[i].length == matrix[j].length`,
    `0 ≤ matrix[i][j] ≤ 99`.

*   **[input] integer width**

    An odd integer representing the star's width. It equals the length of the sides of the bounding square for the star.

    _Guaranteed constraints:_
    `3 ≤ width ≤ min(matrix.length, matrix[i].length)`.

*   **[input] array.integer center**

    An array of two integers.

    _Guaranteed constraints:_
    `center.length = 2`,
    `(width - 1) / 2 ≤ center[0] < matrix.length - (width - 1) / 2`,
    `(width - 1) / 2 ≤ center[1] < matrix[i].length - (width - 1) / 2`.

*   **[input] integer t**

    A non-negative integer denoting how many times the star should be rotated by 45 degrees.

    _Guaranteed constraints:_
    `0 ≤ t ≤ 10<sup>9</sup>`.

*   **[output] array.array.integer**

    An array with specified _star_ rotated by `45 · t` degrees.


## My Solution
```javascript
﻿function starRotation(matrix, width, center, t) {
    t = t % 8;
    if (t == 0) return matrix;
    var yMin = center[0] - ((width - 1) / 2),
        yMax = center[0] + ((width - 1) / 2),
        xMin = center[1] - ((width - 1) / 2),
        xMax = center[1] + ((width - 1) / 2);
    var newMatrix = matrix.map(function (rowArr, y) {
        return rowArr.map(function (val, x) {
            if (y < yMin || y > yMax || x < xMin || x > xMax) return val;
            var slope = (y - center[0]) / (x - center[1]);
            if (isNaN(slope)) {
                // this is the center point, just return the val
            } if (!isFinite(slope)) {
                return matrix[y][x - (center[0] - y)];
            } else if (slope == 0) {
                return matrix[y + (center[1] - x)][x];
            } else if(slope == 1) {
                return matrix[y + (center[1] - x)][x];
            } else if (slope == -1) {
                return matrix[y][x + (y - center[0])];
            }
            return val;
        });
    });
    return (t == 1) ? newMatrix : starRotation(newMatrix, width, center, t - 1);
}
​
```
