# Range Bit Count
﻿You are given two numbers `a` and `b` where `0 ≤ a ≤ b`. Imagine you construct an array of all the integers from `a` to `b` inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

**Example**

For `a = 2` and `b = 7`, the output should be
`rangeBitCount(a, b) = 11`.

Given `a = 2` and `b = 7` the array is: `[2, 3, 4, 5, 6, 7]`. Converting the numbers to binary, we get `[10, 11, 100, 101, 110, 111]`, which contains `1 + 2 + 1 + 2 + 2 + 3 = 11` 1s.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer a**

    _Guaranteed constraints:_
    `0 ≤ a ≤ b`.

*   **[input] integer b**

    _Guaranteed constraints:_
    `a ≤ b ≤ 10`.

*   **[output] integer**


## My Solution
```javascript
﻿function rangeBitCount(a, b) {
    var count = 0;
    for (var i = a; i <= b; i++) {
        var bin = i.toString(2);
        console.log(bin);
        for (var j = 0; j < bin.length; j++) {
            if (bin[j] == '1') count++;
        }
    }
    return count;
}
​
```
