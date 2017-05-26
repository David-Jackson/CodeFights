# Combs
﻿Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

It is guaranteed that there is at least one tooth at each end of the comb.
It is also guaranteed that the total length of two strings is smaller than `32`.
Note, that the combs can **not** be rotated/reversed.

**Example**

For `comb1 = "*..*"` and `comb2 = "*.*"`, the output should be
`combs(comb1, comb2) = 5`.

Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.

![](images/cbs.png)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string comb1**

    A comb is represented as a string. If there is an asterisk (`'*'`) in the `i<sup>th</sup>` position, there is a tooth there. Otherwise there is a dot (`'.'`), which means there is a missing tooth on the comb.

    _Guaranteed constraints:_
    `1 ≤ comb1.length ≤ 10`.

*   **[input] string comb2**

    The second comb is represented in the same way as the first one.

    _Guaranteed constraints:_
    `1 ≤ comb2.length ≤ 10`.

*   **[output] integer**

    The minimum length of a purse Miss X needs.


## My Solution
```javascript
﻿function combs(comb1, comb2) {
    function toBoolean(x) {
        return (x == "*") ? true : false;
    }
    
    function getValue(arr, index) {
        // get value of arr if exists, else return false
        if (
            index < 0 || 
            index >= index.length || 
            arr.length == 0
        ) return false;
        return arr[index];
    }    
    var c1 = comb1.split("").map(toBoolean);
    var c2 = comb2.split("").map(toBoolean);
    
    var padding = c1.length;
    var minLength = c1.length + c2.length;
    
    for (var padding = c2.length; padding >= -c1.length; padding--) {
        var valid = true;
        for (var i = 0; i < c1.length; i++) {
            if (c1[i] && getValue(c2, i + padding)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            minLength = Math.min(
                minLength,
                Math.max(
                    c1.length,
                    c2.length,
                    c1.length + padding,
                    c2.length - padding
                )
            );
        }
    }
    return minLength;
}
​
```
