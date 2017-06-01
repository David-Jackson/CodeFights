# factorSum
﻿Consider the following operation - we take a positive integer `n` and replace it with the sum of its [prime](keyword://prime-number) factors (if a prime number is presented multiple times in the factorization of `n`, then it's counted the same number of times in the sum). This operation is applied sequentially first to the given number, then to the first result, then to the second result and so on, until the result remains the same.

Given any number, find the final result of the operation.

**Example**

For `n = 24`, the output should be
`factorSum(n) = 5`.

`24 -> (2 + 2 + 2 + 3) = 9 -> (3 + 3) = 6 -> (2 + 3) = 5 -> 5`.
So the answer for `n = 24` is `5`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `2 ≤ n ≤ 200`.

*   **[output] integer**


## My Solution
```javascript
﻿function factorSum(n) {
    var orig = n;
    var sum = 0;
    var d = 2;
    while (n > 1) {
        if (n % d == 0) {
            sum += d;
            n = Math.floor(n / d);
            d-= 1;
        }
        d += 1;
    }
    return (orig == sum) ? sum : factorSum(sum);
}
​
```
