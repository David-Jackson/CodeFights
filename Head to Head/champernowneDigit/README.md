# champernowneDigit
﻿The Champernowne constant `C<sub>10</sub>` is defined by concatenating representations of successive integers: `12345678910111213...`.

Given an integer `n`, find the `n<sup>th</sup>` digit _(1-based)_ of `C<sub>10</sub>`.

**Example**

For `n = 11`, the output should be
`champernowneDigit(n) = 0`.

The `11<sup>th</sup>` digit of `12345678910111213...` is `0`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive integer.

    _Guaranteed constraints:_
    `5 ≤ n ≤ 200`.

*   **[output] integer**


## My Solution
```javascript
﻿function champernowneDigit(n) {
​
  for (var i = 1; ; i++) {
    var number = i,
        digits = [];
    while (number) {
      digits.push(number % 10);
      number = Math.floor(number / 10);
    }
    digits.reverse();
    if (n <= digits.length) {
      return digits[n - 1];
    }
    n -= digits.length;
  }
}
​
```
