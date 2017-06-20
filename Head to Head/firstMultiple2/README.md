# firstMultiple2
﻿Find the smallest integer not less than the given limit which is divisible by at least one integer from the given array.

**Example**

For `divisors = [2, 3, 4]` and `start = 13`, the output should be
`firstMultiple2(divisors, start) = 14`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer divisors**

    Array of positive integers.

    _Guaranteed constraints:_
    `1 ≤ divisors.length ≤ 5`,
    `1 ≤ divisors[i] ≤ 10`.

*   **[input] integer start**

    A positive integer.

    _Guaranteed constraints:_
    `10 ≤ start ≤ 150`.

*   **[output] integer**

    The smallest integer not less than `start` which is divisible by at least one integer from `divisors`.


## My Solution
```javascript
﻿function firstMultiple2(divisors, start) {
    while (true) {
        for (var i in divisors) {
            if (start % divisors[i] == 0) return start;
        }
        start++;
    }
}
​
```
