# Decipher
﻿Consider the following ciphering algorithm:

*   For each character replace it with its code.
*   Concatenate all of the obtained numbers.

Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

**Note:** here the _character's code_ means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

**Example**

For `cipher = "10197115121"`, the output should be
`decipher(cipher) = "easy"`.

Explanation: `charCode('e') = 101`, `charCode('a') = 97`, `charCode('s') = 115` and `charCode('y') = 121`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string cipher**

    A non-empty string which is guaranteed to be a cipher for some other string of lowercase letters.

    _Guaranteed constraints:_
    `2 ≤ cipher.length ≤ 100`.

*   **[output] string**


## My Solution
```javascript
﻿function decipher(cipher) {
    var curStr = "";
    var res = "";
    for (var i = 0; i < cipher.length; i++) {
        curStr += cipher[i];
        var tmp = parseInt(curStr)
        if (97 <= tmp && tmp <= 122) {
            res += String.fromCharCode(tmp);
            curStr = "";
        }
    }
    return res;
}
​
```
