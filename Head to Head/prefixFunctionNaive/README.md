# prefixFunctionNaive
﻿Return the value of [prefix function](keyword://prefix-function) for a given string.

**Example**

For `s = "acacbab"`, the output should be
`prefixFunctionNaive(s) = [0, 0, 1, 2, 0, 1, 0]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string s**

    A string of lowercase Latin letters.

    _Guaranteed constraints:_
    `5 ≤ s.length ≤ 10`.

*   **[output] array.integer**


## My Solution
```javascript
﻿function prefixFunctionNaive(s) {
​
  var result = [];
​
  for (var i = 0; i < s.length; i++) {
    result.push(0);
    for (result[i] = i; result[i] >= 0; result[i]--) {
      var matches = true;
      for (var j = i - result[i] + 1; j <= i; j++) {
        if (s[j] !== s[j - i + result[i] - 1]) {
          matches = false;
          break;
        }
      }
      if (matches) {
        break;
      }
    }
  }
​
  return result;
}
​
```
