# Integer to String of Fixed Width
﻿Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding `0s` in front of the original number.

**Example**

*   For `number = 1234` and `width = 2`, the output should be
    `integerToStringOfFixedWidth(number, width) = "34"`;
*   For `number = 1234` and `width = 4`, the output should be
    `integerToStringOfFixedWidth(number, width) = "1234"`;
*   For `number = 1234` and `width = 5`, the output should be
    `integerToStringOfFixedWidth(number, width) = "01234"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer number**

    A non-negative integer.

    _Guaranteed constraints:_
    `0 ≤ number ≤ 10<sup>5</sup>`.

*   **[input] integer width**

    A positive integer representing the desired length.

    _Guaranteed constraints:_
    `1 ≤ width ≤ 5`.

*   **[output] string**

    The modified version of `number` as described above.


## My Solution
```javascript
﻿function integerToStringOfFixedWidth(number, width) {
    var res = "";
    while (res.length < width) {
        var r = number % 10;
        res = r + res;
        number -= r;
        number /= 10;
    }
    return res;
}
​
```
