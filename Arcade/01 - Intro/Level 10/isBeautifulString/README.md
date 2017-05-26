# isBeautifulString
﻿A string is said to be _beautiful_ if `b` occurs in it no more times than `a`; `c` occurs in it no more times than `b`; etc.

Given a string, check whether it is _beautiful_.

**Example**

*   For `inputString = "bbbaacdafe"`, the output should be
    `isBeautifulString(inputString) = true`;
*   For `inputString = "aabbb"`, the output should be
    `isBeautifulString(inputString) = false`;
*   For `inputString = "bbc"`, the output should be
    `isBeautifulString(inputString) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A string of lowercase letters.

    _Guaranteed constraints:_
    `3 ≤ inputString.length ≤ 50`.

*   **[output] boolean**


## My Solution
```javascript
﻿function isBeautifulString(inputString) {
​
  var len = inputString.length,
      l = 'a'.charCodeAt(),
      r = 'z'.charCodeAt();
  for (var sym = l; sym < r; sym++) {
    var balance = 0;
    for (var i = 0; i < len; i++) {
      if (inputString[i].charCodeAt() === sym) {
        balance++;
      }
      if (inputString[i].charCodeAt() === sym + 1) {
        balance--;
      }
    }
    if (balance < 0) {
      return  false ;
    }
  }
  return true;
}
​
​
```
