# Chess Knight Moves
﻿Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

![](images/knight.jpg)

**Example**

*   For `cell = "a1"`, the output should be
    `chessKnightMoves(cell) = 2`.

    ![](images/ex_1.jpg)

*   For `cell = "c2"`, the output should be
    `chessKnightMoves(cell) = 6`.

    ![](images/ex_2.jpg)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string cell**

    String consisting of 2 letters - coordinates of the knight on an `8 × 8` chessboard in [chess notation](keyword://chess-notation).

*   **[output] integer**


## My Solution
```javascript
﻿function chessKnightMoves(cell) {
    var y = cell.charCodeAt(0),
        x = cell.charCodeAt(1),
        d = [
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2]
        ],
        count = 0;
​
    for (var i = 0; i < d.length; i++) {
        var dx = x + d[i][0];
        var dy = y + d[i][1];
        if ((dy >= 97 && dy <= 104) && (dx >= 49 && dx <= 56)) count++;
    }
​
    return count;
}
​
```
