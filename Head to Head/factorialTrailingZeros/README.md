# factorialTrailingZeros
﻿Given an integer `n`, find the number of trailing zeros in the decimal representation of `n!` (the exclamation mark means [factorial](keyword://factorial)).

**Example**

For `n = 10`, the output should be
`factorialTrailingZeros(n) = 2`.
`10! = 3628800`, it has `2` trailing zeros.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `10 ≤ n ≤ 35`.

*   **[output] integer**


## My Solution
```javascript
﻿function factorialTrailingZeros(n) {
  var result = 0;
  for (var i = 5; i <= n; i += 5) {
    var number = i;
    while (number % 5 === 0) {
      number /= 5;
      result++;
    }
  }
  return result;
}
​
```
