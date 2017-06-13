# niceFractions2
﻿We call a fraction `a / b` a _nice fraction_, if `a` and `b` are 5-digit positive integers and all ten digits are used exactly once in `a` and `b` combined (leading zeros are possible).

For a given integer `n` find the number of nice fractions, that are equal to `n`.

**Example**

For `n = 22`, the output should be
`niceFractions2(n) = 1`.

The only _nice_ fraction is `51678 / 02349`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n ≤ 60`.

*   **[output] integer**


## My Solution
```javascript
﻿function niceFractions2(n) {
  var res = 0;
  for (var i = 0; i * n < 1e5; i++) {
    var digits = [];
    var a = i * n;
    var b = i;
    var isNice = true;
    for (var j = 0; j < 10; j++) {
      digits.push(false);
    }
    for (var j = 0; j < 5; j++) {
      digits[a % 10] = true;
      a = Math.floor(a / 10);
      digits[b % 10] = true;
      b = Math.floor(b / 10);
    }
    for (var j = 0; j < 10; j++) {
      if (!digits[j]) {
        isNice = false;
        break;
      }
    }
    if (isNice) res++;
  }
  return res;
```
