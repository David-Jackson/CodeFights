# digitCharactersSum
﻿Given two chars each representing a one-digit number, return a string which represents the sum of these numbers.

**Example**

For `ch1 = '2'` and `ch2 = '5'`, the output should be
`digitCharactersSum(ch1, ch2) = "7"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] char ch1**

    A character in range `'0'..'9'`.

*   **[input] char ch2**

    A character in range `'0'..'9'`.

*   **[output] string**


## My Solution
```javascript
﻿function digitCharactersSum(ch1, ch2) {
  var x1 = ch1.charCodeAt(0) - '0'.charCodeAt(0),
      x2 = ch2.charCodeAt(0) - '0'.charCodeAt(0);
  if (x1 + x2 < 10) {
    return String.fromCharCode('0'.charCodeAt(0) + x1 + x2);
  }
  else {
    return '1' + String.fromCharCode(
        '0'.charCodeAt(0) + (x1 + x2) % 10);
  }
}
​
```
