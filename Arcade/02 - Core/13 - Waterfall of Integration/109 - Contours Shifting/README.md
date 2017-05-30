# Contours Shifting
﻿Mark got a rectangular array `matrix` for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, so he decides to shift all of its _i-contours_ in a clockwise direction if `i` is even, and counterclockwise if `i` is odd.

Here is how Mark defines _i-contours_:

*   the _0-contour_ of a rectangular array as the union of left and right columns as well as top and bottom rows;
*   consider the initial matrix without the _0-contour_: its _0-contour_ is the _1-contour_ of the initial matrix;
*   define _2-contour_, _3-contour_, etc. in the same manner by removing _0-contours_ from the obtained arrays.

Implement a function that does exactly what Mark wants to do to his matrix.

**Example**

*   For

    ```
    matrix = [[ 1,  2,  3,  4],
               [ 5,  6,  7,  8],
               [ 9, 10, 11, 12],
               [13, 14, 15, 16],
               [17, 18, 19, 20]]

    ```

    the output should be

    ```
    contoursShifting(matrix) = [[ 5,  1,  2,  3],
                                 [ 9,  7, 11,  4],
                                 [13,  6, 15,  8],
                                 [17, 10, 14, 12],
                                 [18, 19, 20, 16]]

    ```

*   For `matrix = [[238, 239, 240, 241, 242, 243, 244, 245]]`,
    the output should be
    `contoursShifting(matrix) = [[245, 238, 239, 240, 241, 242, 243, 244]]`.

    Note, that if a _contour_ is represented by a `1 × n` array, its center is considered to be _below_ it.

*   For

    ```
    matrix = [[238],
               [239],
               [240],
               [241],
               [242],
               [243],
               [244],
               [245]]

    ```

    the output should be

    ```
    contoursShifting(matrix) = [[245],
                                 [238],
                                 [239],
                                 [240],
                                 [241],
                                 [242],
                                 [243],
                                 [244]]

    ```

    If a _contour_ is represented by an `n × 1` array, its center is considered to be _to the left_ of it.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer matrix**

    _Guaranteed constraints:_
    `1 ≤ matrix.length ≤ 100`,
    `1 ≤ matrix[i].length ≤ 100`,
    `1 ≤ matrix[i][j] ≤ 1000`.

*   **[output] array.array.integer**

    The given `matrix` with its _contours_ shifted.


## My Solution
```javascript
﻿        return val.reverse(); // reverse contour so items can be popped out
    }).reverse();
    
    // put the contours back
    curLayer = layers.pop();
    count = 0;
    x = 0;
    y = 0;
    di = 0;
    while (count < limit) {
        count++;
        matrix[y][x] = curLayer.pop();
        x += dx[di];
        y += dy[di];
        if (y >= matrix.length ||
            x >= matrix[0].length ||
            y < 0 || x < 0 ||
            !isNaN(matrix[y][x])) {
            x -= dx[di];
            y -= dy[di];
            di = (di + 1) % dx.length;
            x += dx[di];
            y += dy[di];
            if (di == 0) {
                curLayer = layers.pop();
            }
        }
    }
    return matrix;
}
​
```
