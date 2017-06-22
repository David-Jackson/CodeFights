# lrSegmentNumber
﻿Define _l-r-segment number_ as the number formed by concatenating all the digits from `l` to `r` in ascending order.

Given `l` and `r` (`l ≤ r`), return the _l-r-segment number_.

**Example**

For `l = 2` and `r = 4`, the output should be
`lrSegmentNumber(l, r) = 234`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer l**

    _Guaranteed constraints:_
    `1 ≤ l ≤ r`.

*   **[input] integer r**

    _Guaranteed constraints:_
    `l ≤ r ≤ 9`.

*   **[output] integer**


## My Solution
```javascript
﻿function lrSegmentNumber(l, r) {
    var res = "";
    for (var i = l; i <= r; i++) {
        res += i;
    }
    return parseInt(res);
}
​
```
