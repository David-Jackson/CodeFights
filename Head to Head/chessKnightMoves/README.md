# chessKnightMoves
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
​
  var isValid = function(pos) {
    if (0 <= pos && pos < 8) {
      return true;
    }
    return false;
  }
​
  var getX = function(pos) {
    return pos.charCodeAt() - 'a'.charCodeAt();
  }
  var getY = function(pos) {
    return pos.charCodeAt() - '1'.charCodeAt();
  }
​
  var current_x = getX(cell[0]);
  var current_y = getY(cell[1]);
  var result = 0;
​
  for (var dx = -2; dx <= 2; dx++) {
    for (var dy = -2; dy <= 2; dy++) {
      if (Math.abs(dx * dy) === 2) {
        if (isValid(current_x + dx) && isValid(current_y + dy)) result++;
      }
```
