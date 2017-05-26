# lineEncoding
﻿Given a string, return its encoding defined as follows:

*   First, the string is divided into the least possible number of disjoint [substrings](keyword://substring) consisting of identical characters
    *   for example, `"aabbbc"` is divided into `["aa", "bbb", "c"]`
*   Next, each _substring_ with length greater than one is replaced with a concatenation of its length and the repeating character
    *   for example, _substring_ `"bbb"` is replaced by `"3b"`
*   Finally, all the new strings are concatenated together in the same order and a new string is returned.

**Example**

For `s = "aabbbc"`, the output should be
`lineEncoding(s) = "2a3bc"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string s**

    String consisting of lowercase English letters.

    _Guaranteed constraints:_
    `4 ≤ s.length ≤ 15`.

*   **[output] string**

    Encoded version of `s`.


## My Solution
```javascript
﻿function lineEncoding(s) {
    s = s.split("");
    var arr = [];
    var str = "";
    var res = "";
    var prev = s[0];
    while (s.length > 0) {
        if (s[0] == prev) {
            str += s[0];
        } else {
            arr.push(str);
            str = s[0];
        }
        prev = s[0];
        s.splice(0,1);
    }
    arr.push(str);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == 1) {
            res += arr[i];
        } else {
            res += arr[i].length;
            res += arr[i][0];
        }
    }
    return res;
```
