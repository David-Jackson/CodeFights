# containsDuplicates
﻿Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return `true` if any element appears at least twice in the array, and it should return `false` if every element is distinct.

**Example**

*   For `a = [1, 2, 3, 1]`, the output should be
    `containsDuplicates(a) = true`.

    There are two `1`s in the given array.

*   For `a = [3, 1]`, the output should be
    `containsDuplicates(a) = false`.

    The given array contains no duplicates.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    _Guaranteed constraints:_
    `0 ≤ a.length ≤ 10<sup>5</sup>`,
    `-2 · 10<sup>9</sup> ≤ a[i] ≤ 2 · 10<sup>9</sup>`.

*   **[output] boolean**


## My Solution
```javascript
﻿function containsDuplicates(a) {
    var nums = {};
    for (var i in a) {
        if (!nums[a[i]]) {
            nums[a[i]] = true;
        } else {
            return true;
        }
    }
    return false;
}
​
```
