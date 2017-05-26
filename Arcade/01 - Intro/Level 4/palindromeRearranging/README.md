# palindromeRearranging
﻿Given a string, find out if its characters can be rearranged to form a [palindrome](keyword://palindrome).

**Example**

For `inputString = "aabb"`, the output should be
`palindromeRearranging(inputString) = true`.

We can rearrange `"aabb"` to make `"abba"`, which is a palindrome.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A string consisting of lowercase English letters.

    _Guaranteed constraints:_
    `4 ≤ inputString.length ≤ 50`.

*   **[output] boolean**

    `true` if the characters of the `inputString` can be rearranged to form a palindrome, `false` otherwise.


## My Solution
```javascript
﻿function palindromeRearranging(inputString) {
    var letters = [];
    var occurances = [];
    for (var i = 0; i < inputString.length; i++) {
        var index = letters.indexOf(inputString[i]);
        if (index == -1) {
            letters.push(inputString[i]);
            occurances.push(1);
        } else {
            occurances[index] += 1;
        }
    }
    var odd = false;
    for (var i = 0; i < occurances.length; i++) {
        if (occurances[i] % 2 == 1) {
            if (odd) {
                return false;
            }
            odd = true;
        }
    }
    return true;
}
​
```
