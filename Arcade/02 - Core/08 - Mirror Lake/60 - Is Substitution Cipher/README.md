# Is Substitution Cipher
﻿A _ciphertext alphabet_ is obtained from the [plaintext alphabet](keyword://plaintext-alphabet) by means of rearranging some characters. For example `"bacdef...xyz"` will be a simple ciphertext alphabet where `a` and `b` are rearranged.

A _substitution cipher_ is a method of encoding where each letter of the _plaintext alphabet_ is replaced with the corresponding (i.e. having the same index) letter of some _ciphertext alphabet_.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) _substitution ciphers_.

**Example**

*   For `string1 = "aacb"` and `string2 = "aabc"`, the output should be
    `isSubstitutionCipher(string1, string2) = true`.

    Any _ciphertext alphabet_ that starts with `acb...` would make this transformation possible.

*   For `string1 = "aa"` and `string2 = "bc"`, the output should be
    `isSubstitutionCipher(string1, string2) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string string1**

    A string consisting of lowercase characters.

    _Guaranteed constraints:_
    `1 ≤ string1.length ≤ 10`.

*   **[input] string string2**

    A string consisting of lowercase characters of the same length as `string1`.

    _Guaranteed constraints:_
    `string2.length = string1.length`.

*   **[output] boolean**


## My Solution
```javascript
﻿function isSubstitutionCipher(string1, string2) {
    var map1 = {};
    var map2 = {};
    for (var i = 0; i < string1.length; i++) {
        var c1 = string1.charAt(i);
        var c2 = string2.charAt(i);
        if (map1[c1]) {
            if (map1[c1] != c2) return false;
        } else {
            map1[c1] = c2;
        }
        if (map2[c2]) {
            if (map2[c2] != c1) return false;
        } else {
            map2[c2] = c1;
        }
    }
    return true;
}
​
```
