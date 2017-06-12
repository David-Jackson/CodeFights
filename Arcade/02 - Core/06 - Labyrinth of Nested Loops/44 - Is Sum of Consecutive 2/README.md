# Is Sum of Consecutive 2
﻿Find the number of ways to express `n` as sum of some (at least two) consecutive positive integers.

**Example**

*   For `n = 9`, the output should be
    `isSumOfConsecutive2(n) = 2`.

    There are two ways to represent `n = 9`: `2 + 3 + 4 = 9` and `4 + 5 = 9`.

*   For `n = 8`, the output should be
    `isSumOfConsecutive2(n) = 0`.

    There are no ways to represent `n = 8`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive integer.

    _Guaranteed constraints:_
    `1 ≤ n ≤ 25`.

*   **[output] integer**


## My Solution
```javascript
﻿function isSumOfConsecutive2(n) {
    var arr = [];
    var count = 0;
    for (var i = 1; i < n; i++) {
        arr.push(i);
    }
    
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        var j = 0;
        while (sum < n) {
            sum += arr[i + j];
            j++;
        }
        if (n == sum) {
            count++;
        }
    }
    return count;
}
​
```
