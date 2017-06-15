# maxZeros
﻿Given a decimal integer `n`, find an integer `k ≥ 2` such that the representation of `n` in base `k` has the maximum possible number of zeros. If there are several answers, output the smallest one.

**Example**

For `n = 9`, the output should be
`maxZeros(n) = 2`.
`9 = 1001<sub>2</sub> = 100<sub>3</sub> = 21<sub>4</sub>...`
If you'll try all other bases, you'll see that the maximum possible number of zeros in these representations is `2`, thus the answer is `k = 2`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `3 ≤ n ≤ 400`.

*   **[output] integer**

    The desired numeral system base.


## My Solution
```javascript
﻿function maxZeros(n) {
  var answer = 0,
      maxZeros = 0;
  for (var k = 2; k <= n; k++) {
    var numZeros = 0,
        value = n;
    while (value) {
      if (value % k === 0) {
        numZeros++;
      }
      value = Math.floor(value / k);
    }
    if (numZeros > maxZeros) {
      maxZeros = numZeros;
      answer = k;
    }
  }
  return answer;
}
​
```
