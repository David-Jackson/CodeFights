# sumUpNumbers
﻿CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given `inputString`.

**Example**

For `inputString = "2 apples, 12 oranges"`, the output should be
`sumUpNumbers(inputString) = 14`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    _Guaranteed constraints:_
    `6 ≤ inputString.length ≤ 60`.

*   **[output] integer**


## My Solution
```javascript
﻿function sumUpNumbers(inputString) {
    var sum = 0;
    var num = 0;
    var isNumber = function(x) {
        var c = x.charCodeAt(0);
        return (c >= 48 && c <= 57);
    }
    for (var i = 0; i < inputString.length; i++) {
        if (isNumber(inputString[i])) {
            num *= 10;
            num += parseInt(inputString[i]);
        } else {
            sum += num;
            num = 0;
        }
    }
    sum += num;
    return sum;
}
​
```
