# reverseParentheses
﻿You have a string `s` that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in `s` form a [regular bracket sequence](keyword://regular-bracket-sequence).

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

**Example**

For string `s = "a(bc)de"`, the output should be
`reverseParentheses(s) = "acbde"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string s**

    A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a _regular bracket sequence_.

    _Constraints:_
    `5 ≤ s.length ≤ 55`.

*   **[output] string**


## My Solution
```javascript
﻿function reverseParentheses(s) {
    while (s.indexOf("(") != -1) {
        // find last open parentheses
        var i = -1;
        while (s.indexOf("(", i + 1) != -1) {
            i = s.indexOf("(", i + 1);
        } 
        var j = s.indexOf(")", i + 1);
        s = s.substring(0, i) +
            s.substring(i + 1,j).split("").reverse().join("") +
            s.substring(j + 1, s.length);
    }
    return s;
}
​
```
