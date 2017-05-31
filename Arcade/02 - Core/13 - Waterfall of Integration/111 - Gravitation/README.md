# Gravitation
﻿You are given a vertical box divided into equal columns. Someone dropped several stones from its top through the columns. Stones are falling straight down at a constant speed (equal for all stones) while possible (i.e. while they haven't reached the ground or they are not blocked by another motionless stone). Given the state of the box at some moment in time, find out which columns become motionless first.

**Example**

For

```
rows = ["#..##",
        ".##.#",
        ".#.##",
        "....."]

```

the output should be `gravitation(rows) = [1, 4]`.

Check out the image below for better understanding:

![](images/example.png)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.string rows**

    A non-empty array of strings of equal length consisting only of `#`-s and `.`-s describing the box at a specific moment in time. Sharps represent stones, and dots represent empty cells. `row[0]` corresponds to the upper row. Last element of `rows` corresponds to the ground level.

    _Guaranteed constraints:_
    `2 ≤ rows.length ≤ 10`,
    `2 ≤ rows[i].length ≤ 10`.

*   **[output] array.integer**

    A sorted array containing numbers of all columns (leftmost column's number is `0`) in which movements will stop at the same second and earlier than in any other column. Assume that if there are no stones in a column then movement stops immediately, i.e. after `0` seconds.


## My Solution
```javascript
﻿function gravitation(rows) {
    var firstStone = new Array(rows[0].length).fill(undefined);
    var spacesAfter = new Array(rows[0].length).fill(0);
    
    for (var y = 0; y < rows.length; y++) {
        for (var x = 0; x < rows[y].length; x++) {
            var spot = rows[y][x];
            console.log(spot);
            if (spot == "#") {
                if (firstStone[x] == undefined) {
                    firstStone[x] = y;
                }
            } else {
                if (firstStone[x] != undefined) {
                    spacesAfter[x] += 1;
                }
            }
        }
    }
    
    var res = [];
    var min = spacesAfter.reduce(function(acc, val, index) {
        if (val == acc) {
            res.push(index);
        } else if (val < acc) {
            res = [index];
            return val;
        }
        return acc;
    }, Infinity);
    return res;
}
​
```
