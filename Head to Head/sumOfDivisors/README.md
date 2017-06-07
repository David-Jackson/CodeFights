# sumOfDivisors
﻿Find the sum of all divisors of a given integer.

**Example**

For `n = 12`, the output should be
`sumOfDivisors(n) = 28`.

Explanation: `1 + 2 + 3 + 4 + 6 + 12 = 28`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n ≤ 15`.

*   **[output] integer**


## My Solution
```javascript
﻿function sumOfDivisors(n){
  var result = 0;
​
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      result += i;
    }
  }
​
  return result;
}
​
```
