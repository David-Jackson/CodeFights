# chessBoardCellColor
﻿Given two cells on the standard chess board, determine whether they have the same color or not.

**Example**

*   For `cell1 = "A1"` and `cell2 = "C3"`, the output should be
    `chessBoardCellColor(cell1, cell2) = true`.

    ![](images/example1.png)

*   For `cell1 = "A1"` and `cell2 = "H3"`, the output should be
    `chessBoardCellColor(cell1, cell2) = false`.

    ![](images/example2.png)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string cell1**

*   **[input] string cell2**

*   **[output] boolean**

    `true` if both cells have the same color, `false` otherwise.


## My Solution
```javascript
﻿function chessBoardCellColor(cell1, cell2) {
    var cols = "ABCDEFGH";
    var rows = "12345678";
    var sum1 = cols.indexOf(cell1[0]) + rows.indexOf(cell1[1]);
    var sum2 = cols.indexOf(cell2[0]) + rows.indexOf(cell2[1]);
    return sum1 % 2 == sum2 % 2;
}
​
```
