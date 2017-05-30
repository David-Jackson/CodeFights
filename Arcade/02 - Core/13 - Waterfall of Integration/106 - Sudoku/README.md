# Sudoku
﻿_Sudoku_ is a number-placement puzzle. The objective is to fill a `9 × 9` grid with digits so that each column, each row, and each of the nine `3 × 3` sub-grids that compose the grid contains all of the digits from `1` to `9`.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

**Example**

For the first example below, the output should be `true`. For the other grid, the output should be `false`: each of the nine `3 × 3` sub-grids should contain all of the digits from `1` to `9`.

![](images/sudoku.png)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer grid**

    A matrix representing `9 × 9` grid already filled with numbers from `1` to `9`.

*   **[output] boolean**

    `true` if the given grid represents a correct solution to Sudoku, `false` otherwise.


## My Solution
```javascript
﻿function sudoku(grid) {
    var maxArr = function(arr) {
        var max = 0;
        for (var i = 0; i < arr.length; i++) {
            if (max < arr[i]) max = arr[i];
        }
        return max;
    }
    
    var hasOneThroughNine = function(arr) {
        var res = [0,0,0,0,0,0,0,0,0];
        for (var i = 0; i < arr.length; i++) {
            var x = parseInt(arr[i]);
            if (x != NaN) res[x - 1] += 1;
        }
        return maxArr(res) <= 1;
    }
    
    
    // check rows
    for (var y = 0; y < grid.length; y++) {
        if (!hasOneThroughNine(grid[y])) return false;
    }
    
    // check columns
    for (var x = 0; x < 9; x++) {
        var arr = [];
        for (var y = 0; y < 9; y++) {
            arr.push(grid[y][x]);
        }
        if (!hasOneThroughNine(arr)) return false;
    }
    
    // check 3 x 3 grids
    for (var yi = 0; yi < 9; yi = yi + 3) {
        for (var xi = 0; xi < 9; xi = xi + 3) {
            arr = [];
            for (var y = 0; y < 3; y++) {
                for (var x = 0; x < 3; x++) {
                    arr.push(grid[yi + y][xi + x]);
                }
            }
            if (!hasOneThroughNine(arr)) return false;
        }
    }
    
    
    return true;
}
```
