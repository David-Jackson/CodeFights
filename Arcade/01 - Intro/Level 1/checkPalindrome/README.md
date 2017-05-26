# checkPalindrome
﻿Given the string, check if it is a [palindrome](keyword://palindrome).

**Example**

*   For `inputString = "aabaa"`, the output should be
    `checkPalindrome(inputString) = true`;
*   For `inputString = "abac"`, the output should be
    `checkPalindrome(inputString) = false`;
*   For `inputString = "a"`, the output should be
    `checkPalindrome(inputString) = true`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A non-empty string consisting of lowercase characters.

    _Guaranteed constraints:_
    `1 ≤ inputString.length ≤ 10`.

*   **[output] boolean**

    `true` if `inputString` is a palindrome, `false` otherwise.


## My Solution
```javascript
function checkPalindrome(inputString) {
    return inputString == inputString.split("").reverse().join("");
}
​

```
