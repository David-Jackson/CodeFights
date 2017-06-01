# singkatan
﻿Given two strings `s1` and `s2`, merge them into one string by overlapping the suffix of the first string and the prefix of the second string. If there's nothing to concatenate, return the concatenation of the strings.

**Example**

For `s1 = "cesario"` and `s2 = "oputera"`, the output should be
`singkatan(s1, s2) = "cesarioputera"`.

The strings overlap by the character `'o'`, making the answer `"cesarioputera"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string s1**

    A string consisting of lowercase English letters.

    _Guaranteed constraints:_
    `1 ≤ s1.length ≤ 1000`.

*   **[input] string s2**

    A string consisting of lowercase English letters.

    _Guaranteed constraints:_
    `1 ≤ s2.length ≤ 1000`.

*   **[output] string**

    The input strings, merged as described above.


## My Solution
```javascript
﻿function singkatan(s1, s2) {
    var maxOverlap = 0;
    for (var i = 0; i < s2.length; i++) {
        var index = s1.indexOf(s2.substring(0, i + 1), s1.length - i - 1);
        maxOverlap = Math.max(
            maxOverlap,
            s1.length - ((index == -1) ? s1.length : index)
        );
    }
    return s1.substring(0, s1.length - maxOverlap) + s2;
}
​
```
