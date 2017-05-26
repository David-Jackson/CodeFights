# Three Split
﻿You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

It is guaranteed that the sum of all elements in the array is divisible by `3`.

**Example**

For `a = [0, -1, 0, -1, 0, -1]`, the output should be
`threeSplit(a) = 4`.

Here are all possible ways:

*   `[0, -1] [0, -1] [0, -1]`
*   `[0, -1] [0, -1, 0] [-1]`
*   `[0, -1, 0] [-1, 0] [-1]`
*   `[0, -1, 0] [-1] [0, -1]`

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    _Guaranteed constraints:_
    `5 ≤ a.length ≤ 10<sup>4</sup>`,
    `-10<sup>8</sup> ≤ a[i] ≤ 10<sup>8</sup>`.

*   **[output] integer**

    It's guaranteed that for the given test cases the answer always fits signed `32`-bit integer type.


## My Solution
```javascript
﻿function threeSplit(a) {
    var count = 0;
    var sum = a.reduce(function (a, b) {
        return a + b;
    }, 0);
    var aim = sum / 3;
    var ai = 0;
    for (var i = 0; i < a.length - 2; i++) {
        ai += a[i];
        if (ai != aim) continue;
        var aj = 0;
        for (var j = i + 1; j < a.length - 1; j++) {
            aj += a[j];
            if (aj != aim) continue;
            var ak = 0;
            for (var k = j + 1; k < a.length; k++) {
                ak += a[k];
            }
            if (ak == aj) count++;
        }
    }
    return count;
}
```
