# variableName
﻿Correct variable names consist only of Latin letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

**Example**

*   For `name = "var_1__Int"`, the output should be
    `variableName(name) = true`;
*   For `name = "qq-q"`, the output should be
    `variableName(name) = false`;
*   For `name = "2w2"`, the output should be
    `variableName(name) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string name**

    _Guaranteed constraints:_
    `1 ≤ name.length ≤ 10`.

*   **[output] boolean**

    `true` if `name` is a correct variable name, `false` otherwise.


## My Solution
```javascript
﻿function variableName(name) {
    var limits = [
        [48, 57],
        [65, 90],
        [97, 122],
        [95, 95]
    ];
    for (var i = 0; i < name.length; i++) {
        var code = name.charCodeAt(i);
        if (i == 0 &&
            code <= limits[0][1] &&
            code >= limits[0][0]) return false;
        var good = false; 
        for (var j = 0; j < limits.length; j++) {
            if (code >= limits[j][0] && code <= limits[j][1]) {
                good = true;
                break;
            }
        }
        if (!good) return false;
    }
    return true;
}
​
```
