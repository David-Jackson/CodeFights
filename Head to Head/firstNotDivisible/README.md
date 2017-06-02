# firstNotDivisible
﻿Find the smallest integer not less than the given limit which is not divisible by any of the integers from the given array.

**Example**

For `divisors = [2, 3, 4]` and `start = 14`, the output should be
`firstNotDivisible(divisors, start) = 17`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer divisors**

    Array of positive integers, each greater than `1`.

    _Guaranteed constraints:_
    `1 ≤ divisors.length ≤ 10`,
    `2 ≤ divisors[i] ≤ 10`.

*   **[input] integer start**

    A positive integer.

    _Guaranteed constraints:_
    `10 ≤ start ≤ 150`.

*   **[output] integer**

    The smallest integer not less than `start` which is not divisible by any integer from `divisors`.


## My Solution
```javascript
﻿function firstNotDivisible(divisors, start) {
    while (!divisibleByAll(start, divisors)) {
        start++;
    }
    return start;
}
​
function divisibleByAll(num, arr) {
    for (var i in arr) {
        if (num % arr[i] == 0) return false;
    }
    return true;
}
```
