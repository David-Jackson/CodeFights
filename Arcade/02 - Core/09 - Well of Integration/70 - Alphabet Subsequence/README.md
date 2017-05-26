# Alphabet Subsequence
﻿Check whether the given string is a [subsequence](keyword://subsequence) of the [plaintext alphabet](keyword://plaintext-alphabet).

**Example**

*   For `s = "effg"` or `s = "cdce"`, the output should be
    `alphabetSubsequence(s) = false`;
*   For `s = "ace"` or `s = "bxz"`, the output should be
    `alphabetSubsequence(s) = true`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string s**

    _Guaranteed constraints:_
    `2 ≤ s.length ≤ 15`.

*   **[output] boolean**

    `true` if the given string is a _subsequence_ of the _alphabet_, `false` otherwise.


## My Solution
```javascript
﻿function alphabetSubsequence(s) {
    for (var i = 0; i < s.length - 1; i++) {
        if (s.charCodeAt(i) >= s.charCodeAt(i + 1)) return false;
    }
    return true;
}
​
```
