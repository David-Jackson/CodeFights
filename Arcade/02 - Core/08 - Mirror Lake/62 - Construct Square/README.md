# Construct Square
﻿Given a string consisting of lowercase English letters, find the largest square number which can be obtained by _reordering_ the string's characters and _replacing_ them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

If there is no solution, return `-1`.

**Example**

*   For `s = "ab"`, the output should be
    `constructSquare(s) = 81`.
    The largest `2`-digit square number with different digits is `81`.
*   For `s = "zzz"`, the output should be
    `constructSquare(s) = -1`.
    There are no `3`-digit square numbers with identical digits.
*   For `s = "aba"`, the output should be
    `constructSquare(s) = 900`.
    It can be obtained after reordering the initial string into `"baa"` and replacing "a" with `0` and "b" with `9`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string s**

    _Guaranteed constraints:_
    `1 ≤ s.length < 10`.

*   **[output] integer**


## My Solution
```javascript
﻿function constructSquare(s) {
    var diffLetters = differentLettersCount(s);
    var sqr = nextBiggestSquare(
        Math.pow(10, s.length) - 1
    );
    var lowerLimit = Math.pow(10, s.length - 1);
    while (sqr > lowerLimit) {
        var diffNums = differentNumbersCount(sqr);
        if (diffLetters.toString() == diffNums.toString()) return sqr;
        sqr = nextBiggestSquare(sqr - 1);
    }
    return -1;
}
​
function differentLettersCount(str) {
    var res = new Array(26);
    res.fill(0);
    for (var i = 0; i < str.length; i++) {
        res[str.charCodeAt(i) - 97] += 1;
    }
    return res.filter(n => n != 0).sort();
}
​
function differentNumbersCount(n) {
    var res = new Array(10);
    res.fill(0);
    while(n > 0) {
        var r = n % 10;
        res[r] += 1;
        n -= r;
        n /= 10;
    }
    return res.filter(n => n != 0).sort();
```
