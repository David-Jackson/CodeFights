# sortByHeight
﻿Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

**Example**

For `a = [-1, 150, 190, 170, -1, -1, 160, 180]`, the output should be
`sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    If `a[i] = -1`, then the `i<sup>th</sup>` position is occupied by a tree. Otherwise `a[i]` is the height of a person standing in the `i<sup>th</sup>` position.

    _Guaranteed constraints:_
    `5 ≤ a.length ≤ 15`,
    `-1 ≤ a[i] ≤ 200`.

*   **[output] array.integer**

    Sorted array `a` with all the trees untouched.


## My Solution
```javascript
﻿function sortByHeight(a) {
    var trees = [],
        noMove = [],
        res = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] == -1) {
            noMove.push(i);
        } else {
            trees.push(a[i]);
        }
    }
    trees.sort(function (a,b) {
        return a < b;
    });
    for (var i = 0; i < a.length; i++) {
        if (noMove.indexOf(i) != -1) {
            res.push(-1);
        } else {
            res.push(trees.pop());
        }
    }
    return res;
}
​
```
