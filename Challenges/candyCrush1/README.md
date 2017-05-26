# candyCrush1
﻿Have you ever played Candy Crush Saga? If so, this task will feel familiar! Determine whether the given `gameboard` contains a set of `3` or more consecutive candies of the same color in either a row or a column.

**Example**

For

```
gameboard = [["R","B","G"], 
             ["R","Y","B"], 
             ["R","O","Y"]]

```

the output should be
`candyCrush1(gameboard) = true`.

There is a column with three candies of color `R` (red).

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.char gameboard**

    A 2D matrix of characters, with each character representing a color: `'R'` (red), `'B'` (blue), `'G'` (green), `'Y'` (yellow), `'P'` (purple), `'O'` (orange).

    _Guaranteed constraints:_
    `1 ≤ gameboard.length ≤ 200`,
    `1 ≤ gameboard[i].length ≤ 200`,
    `3 ≤ gameboard.length ≤ 200 || 3 ≤ gameboard[i].length ≤ 200` .

*   **[output] boolean**

    Return `true` if the `gameboard` contains at least three consecutive candies of the same color either in a row or in a column, otherwise return `false`.


## My Solution
```javascript
﻿function candyCrush1(gameboard) {
    var curColStreak = 0;
    var curColCandy = "";
    for (var y = 0; y < gameboard.length; y++) {
        for (var x = 0; x < gameboard[y].length; x++) {
            if (
                (
                    y - 1 >= 0 &&
                    y + 1 <= gameboard.length - 1 &&
                    gameboard[y][x] == gameboard[y - 1][x] &&
                    gameboard[y][x] == gameboard[y + 1][x]
                ) ||
                (
                    x - 1 >= 0 &&
                    x + 1 <= gameboard[y].length - 1 &&
                    gameboard[y][x] == gameboard[y][x - 1] &&
                    gameboard[y][x] == gameboard[y][x + 1]
                )
            ) return true;
        }
    }
​
    return false;
}
​
```
