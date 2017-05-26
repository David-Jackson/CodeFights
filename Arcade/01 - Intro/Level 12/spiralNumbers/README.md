# spiralNumbers
﻿Construct a square matrix with a size `N × N` containing integers from `1` to `N * N` in a spiral order, starting from top-left and in clockwise direction.

**Example**

For `n = 3`, the output should be

```
spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    Matrix size, a positive integer.

    _Guaranteed constraints:_
    `3 ≤ n ≤ 10`.

*   **[output] array.array.integer**


## My Solution
```javascript
﻿function spiralNumbers(n) {
    var x = 0;
    var y = 0;
    var dx = [1, 0, -1, 0];
    var dy = [0, 1, 0, -1];
    var di = 0;
    var matrix = [];
    // create empty n x n matrix
    for (var i = 0; i < n; i++) {
        var line = [];
        for (var j = 0; j < n; j++) {
            line.push(0);
        }
        matrix.push(line);
    }
    var i = 1;
    while (i <= (n * n)) {
        console.log(x, y, i, dx[di], dy[di]);
        if (x >= 0 && x < n && y >= 0 && y < n && matrix[y][x] == 0) {
            matrix[y][x] = i;
        } else {
            x -= dx[di];
            y -= dy[di];
            di = (di + 1) % 4;
            i--;
        }
```
