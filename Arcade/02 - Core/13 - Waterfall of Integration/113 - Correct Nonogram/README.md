# Correct Nonogram
﻿A **nonogram** is also known as _Paint by Numbers_ and _Japanese Crossword_. The aim in this puzzle is to color the grid into black and white squares. At the top of each column, and at the side of each row, there are sets of one or more _numbers_ which describe the runs of black squares in that row/column in exact order. For example, if you see `10 1` along some column/row, this indicates that there will be a run of exactly ten black squares, followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.

You are given a square **nonogram** of size `size`. Its grid is given as a square matrix `nonogramField` of size `(size + 1) / 2 + size`, where the first `(size + 1) / 2` cells of each row and and each column define the _numbers_ for the corresponding row/column, and the rest `size × size` cells define the the grid itself.

Determine if the given **nonogram** has been solved correctly.

_Note: here `/` means integer division._

**Example**

*   For `size = 5` and

    ```
    nonogramField = [["-", "-", "-", "-", "-", "-", "-", "-"],
                     ["-", "-", "-", "2", "2", "1", "-", "1"],
                     ["-", "-", "-", "2", "1", "1", "3", "3"],
                     ["-", "3", "1", "#", "#", "#", ".", "#"],
                     ["-", "-", "2", "#", "#", ".", ".", "."],
                     ["-", "-", "2", ".", ".", ".", "#", "#"],
                     ["-", "1", "2", "#", ".", ".", "#", "#"],
                     ["-", "-", "5", "#", "#", "#", "#", "#"]]

    ```

    the output should be `correctNonogram(size, nonogramField) = true`;

*   For `size = 5` and

    ```
    nonogramField = [["-", "-", "-", "-", "-", "-", "-", "-"],
                     ["-", "-", "-", "-", "-", "1", "-", "-"],
                     ["-", "-", "-", "3", "3", "2", "5", "5"],
                     ["-", "-", "3", ".", ".", ".", "#", "#"],
                     ["-", "2", "2", "#", "#", "#", "#", "#"],
                     ["-", "-", "5", "#", "#", "#", "#", "#"],
                     ["-", "-", "5", "#", "#", "#", "#", "#"],
                     ["-", "-", "2", ".", ".", ".", "#", "#"]]

    ```

    the output should be `correctNonogram(size, nonogramField) = false`.

    There are three mistakes in the **nonogram**:

    *   In the `5<sup>th</sup>` (1-based) row there are _numbers_ `["-", "2", "2"]`, so there should be two runs of `2` black squares separated by at least one white square. However, there is only one run of `5` black squares.
    *   In the `6<sup>th</sup>` column there are _numbers_ `["-", "1", "2"]`, so there should be a run of exactly `1` black square, followed by one or more white squares, followed by another `2` black squares. However, there is a single run of `3` black squares not separated by white ones.
    *   Finally, in the `4<sup>th</sup>` row there are _numbers_ `["-", "-", "3"]`, so there should be a single run of exactly `3` black squares. However, there is just a 2-square run in that row.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer size**

    A positive integer, the size of the grid.

    _Guaranteed constraints:_
    `5 ≤ size ≤ 10`.

*   **[input] array.array.string nonogramField**

    A square matrix of strings of size `(size + 1) / 2 + size` defining the puzzle field.
    The first `(size + 1) / 2` cells of each row and each column define the _numbers_ for this row/column. If there is no _number_ in the cell, its value is `"-"`.
    The remaining `size × size` cells define the grid, where string `"#"` denotes black cells and string `"."` denotes white ones.

    _Guaranteed constraints:_
    `8 ≤ nonogramField.length ≤ 15`,
    `nonogramField[i].length = nonogramField.length`.

*   **[output] boolean**

    `true` if the given **nonogram** is solved correctly and `false` otherwise.


## My Solution
```javascript
﻿function correctNonogram(size, nonogramField) {
    
    function noDashesAndParseInt(acc, val) {
        if (val != "-") acc.push(parseInt(val));
        return acc;
    }
    
    function nonogramReduce(acc, val, index, arr) {
        if (val == "#") {
            acc[acc.length - 1] += 1;
        } else {
            acc.push(0);
        }
        return acc;
    }
    
    function arrEqual(a1, a2) {
        if (a1.length != a2.length) return false;
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] != a2[i]) return false;
        }
        return true;
    }
    
    // check rows
    for (var i = nonogramField.length - size; i < nonogramField.length; i++) {
        var expected = nonogramField[i]
            .slice(0, nonogramField[i].length - size)
            .reduce(noDashesAndParseInt, []);
        var actual = nonogramField[i]
            .slice(expected.length, nonogramField[i].length)
            .reduce(nonogramReduce, [0]).filter(n => n != 0);
        if (!arrEqual(expected, actual)) return false;
    }
    
    // check cols
    for (var j = nonogramField[0].length - size; j < nonogramField[0].length; j++) {
        var expected = [];
        var actual = [];
        for (var i = 0; i < nonogramField.length; i++) {
            (
                (i < nonogramField.length - size) ? expected : actual
            ).push(nonogramField[i][j]);
        }
        expected = expected.reduce(noDashesAndParseInt, []);
        actual = actual.reduce(nonogramReduce, [0]).filter(n => n != 0);
        if (!arrEqual(expected, actual)) return false;
    }
    
    return true;
}
​
```