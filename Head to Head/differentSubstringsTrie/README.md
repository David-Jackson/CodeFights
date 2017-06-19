# differentSubstringsTrie
﻿Given a string, find the number of different non-empty [substrings](keyword://substring) in it.

**Example**

For `inputString = "abac"`, the output should be
`differentSubstringsTrie(inputString) = 9`.
They are:

```
"a", "b", "c",
"ab", ac", "ba",
"aba", "bac",
"abac"

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A string consisting only of lowercase English letters.

    _Guaranteed constraints:_
    `3 ≤ inputString.length ≤ 15`.

*   **[output] integer**


## My Solution
```javascript
﻿function differentSubstringsTrie(inputString) {
   var vals = [];
   for (var i = 0; i < inputString.length; i++) {
       for (var j = i + 1; j <= inputString.length; j++) {
           var sub = inputString.substring(i, j);
           if (vals.indexOf(sub) == -1) vals.push(sub);
       }
   }
   return vals.length;
}
​
```
