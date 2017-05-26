# Higher Version
﻿Given two version strings composed of several non-negative decimal fields separated by periods (`"."`), both strings contain equal number of numeric fields. Return `true` if the first version is higher than the second version and `false` otherwise.

The syntax follows the regular _semver_ ordering rules:

```
1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
< 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0

```

There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like `100.020.003` (it would instead be given as `100.20.3`).

**Example**

*   For `ver1 = "1.2.2"` and `ver2 = "1.2.0"`, the output should be
    `higherVersion(ver1, ver2) = true`;
*   For `ver1 = "1.0.5"` and `ver2 = "1.1.0"`, the output should be
    `higherVersion(ver1, ver2) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string ver1**

    _Guaranteed constraints:_
    `1 ≤ ver1.length ≤ 15`.

*   **[input] string ver2**

    _Guaranteed constraints:_
    `1 ≤ ver2.length ≤ 15`.

*   **[output] boolean**


## My Solution
```javascript
﻿function higherVersion(ver1, ver2) {
    a1 = ver1.split(".");
    a2 = ver2.split(".");
    for (var i = 0; i < a1.length; i++) {
        var a = parseInt(a1[i]);
        var b = parseInt(a2[i]);
        if (a == b && i < a1.length - 1) continue;
        return !(a <= b);
    }
    return true;
}
​
```
