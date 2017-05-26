# Ada Number
﻿Consider two following representations of a non-negative integer:

1.  A simple decimal integer, constructed of a non-empty sequence of digits from `0` to `9`;
2.  An integer with at least one digit in a base from `2` to `16` (inclusive), enclosed between `#` characters, and preceded by the base, which can only be a number between `2` and `16` in the first representation. For digits from `10` to `15` characters `a`, `b`, ..., `f` and `A`, `B`, ..., `F` are used.

Additionally, both representations may contain _underscore_ (`_`) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.

_Note: this is how integer numbers are represented in the programming language Ada._

**Example**

*   For `line = "123_456_789"`, the output should be
    `adaNumber(line) = true`;
*   For `line = "16#123abc#"`, the output should be
    `adaNumber(line) = true`;
*   For `line = "10#123abc#"`, the output should be
    `adaNumber(line) = false`;
*   For `line = "10#10#123ABC#"`, the output should be
    `adaNumber(line) = false`;
*   For `line = "10#0#"`, the output should be
    `adaNumber(line) = true`;
*   For `line = "10##"`, the output should be
    `adaNumber(line) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string line**

    A non-empty string.

    _Guaranteed constraints:_
    `2 ≤ line.length ≤ 30`.

*   **[output] boolean**

    `true` if `line` is a valid integer representation, `false` otherwise.


## My Solution
```javascript
﻿function adaNumber(line) {
    if (
        line.charAt(0) == "_" || 
        line.charAt(line.length - 1) == "_"
    ) return false;
    line = line.replace(/_/g, "");
    var parts = line.split("#");
    console.log(parts);
    if (parts.length == 1) {
        // needs to be base ten
        return parts[0].match(/[0-9]/g).length == parts[0].length;
    } else if (parts.length == 3) {
        // can be different base
        if (parts[0] == "" || parts[1] == "" | parts[2] != "") return false;
        var base = parseInt(parts[0]);
        if (base < 2 || base > 16) return false;
        for (var i = 0; i < parts[1].length; i++) {
            if (isNaN(parseInt(parts[1][i], base))) return false;
        }
        return true;
    }
    return false;
}
​
```
