# countIncreasingSequences
﻿Given integers `n` and `k`, find the number of strictly increasing sequences of length `n` consisting of positive integers not exceeding `k`

**Example**

For `n = 2` and `k = 3`, the output should be
`countIncreasingSequences(n, k) = 3`.
They are: `[1, 2]`, `[1, 3]` and `[2, 3]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive integer.

    _Guaranteed constraints:_
    `1 ≤ n ≤ 10`.

*   **[input] integer k**

    A positive integer.

    _Guaranteed constraints:_
    `3 ≤ k ≤ 10`.

*   **[output] integer**


## My Solution
```javascript
﻿function countIncreasingSequences(n, k) {
​
  /*
   * array dp (short for dynamic programming)
   * is used for storing the interim values.
   */
  var dp = [];
  var sum = 0;
​
  for (var i = 0; i <= n; i++) {
    var line = [];
    for (var j = 0; j <= k; j++) {
      line.push(0);
    }
    dp.push(line);
  }
  dp[0][0] = 1;
​
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= k; j++) {
      for (var q = 0; q < j; q++) {
        dp[i][j] += dp[i - 1][q];
      }
    }
  }
```
