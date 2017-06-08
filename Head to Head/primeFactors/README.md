# primeFactors
﻿Write an algorithm that constructs an array of non unique [prime](keyword://prime-number) factors of a number `n`.

**Example**

For `n = 100`, the output should be
`primeFactors(n) = [2, 2, 5, 5]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive integer.

    _Guaranteed constraints:_
    `1 ≤ n ≤ 150`.

*   **[output] array.integer**

    An array of prime factors of `n` from the smallest to the largest.


## My Solution
```javascript
﻿function primeFactors(n) {
  var factors = [],
      divisor = 2;
​
  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor); n = Math.floor(n / divisor);
    }
    else {
      divisor++;
    }
  }
  return factors;
}
​
```
