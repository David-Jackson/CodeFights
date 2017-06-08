# regularBracketSequence1
﻿For a string consisting of only `'('`s and `')'`s, determine if it is [a regular bracket sequence](keyword://regular-bracket-sequence) or not.

**Example**

For `sequence = "()()"`, the output should be
`regularBracketSequence1(sequence) = true`.

We could insert `(1 + 2) * (2 + 4)` which is a valid arithmetic expression, so the answer is `true`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string sequence**

    _Guaranteed constraints:_
    `4 ≤ sequence.length ≤ 10`.

*   **[output] boolean**

    `true` if the bracket sequence is _regular_, `false` otherwise.


## My Solution
```javascript
﻿function regularBracketSequence1(sequence) {
    var d = 0;
    for (var i in sequence) {
        var c = sequence.charAt(i);
        d += ((c == "(") ? 1 : -1);
        if (d < 0) return false;
    }
    return d == 0;
}
​
```
