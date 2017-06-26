# sumOfTwo
﻿You have two integer arrays, `a` and `b`, and an integer target value `v`. Determine whether there is a pair of numbers, where one number is taken from `a` and the other from `b`, that can be added together to get a sum of `v`. Return `true` if such a pair exists, otherwise return `false`.

**Example**

For `a = [1, 2, 3]`, `b = [10, 20, 30, 40]`, and `v = 42`, the output should be
`sumOfTwo(a, b, v) = true`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    An array of integers.

    _Guaranteed constraints:_
    `0 ≤ a.length ≤ 10<sup>5</sup>`,
    `-10<sup>9</sup> ≤ a[i] ≤ 10<sup>9</sup>`.

*   **[input] array.integer b**

    An array of integers.

    _Guaranteed constraints:_
    `0 ≤ b.length ≤ 10<sup>5</sup>`,
    `-10<sup>9</sup> ≤ b[i] ≤ 10<sup>9</sup>`.

*   **[input] integer v**

    _Guaranteed constraints:_
    `-10<sup>9</sup> ≤ v ≤ 10<sup>9</sup>`.

*   **[output] boolean**

    `true` if there are two elements from `a` and `b` which add up to `v`, and `false` otherwise.


## My Solution
```javascript
﻿function sumOfTwo(a, b, v) {
    var a1 = (a.length > b.length) ? b : a;
    var a2 = (a.length > b.length) ? a : b;
    var diffs = {};
    for (var i in a2) {
        diffs[v - a2[i]] = true;
    }
    for (var i in a1) {
        if (diffs[a1[i]]) return true;
    }
    return false;
}
​
```
