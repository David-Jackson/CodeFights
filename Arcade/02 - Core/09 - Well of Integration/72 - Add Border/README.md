# Add Border
﻿Given a rectangular matrix of characters, add a border of asterisks(`*`) to it.

**Example**

For

```
picture = ["abc",
           "ded"]

```

the output should be

```
addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.string picture**

    A non-empty array of non-empty equal-length strings.

    _Guaranteed constraints:_
    `1 ≤ picture.length ≤ 5`,
    `1 ≤ picture[i].length ≤ 5`.

*   **[output] array.string**

    The same matrix of characters, framed with a border of asterisks of width `1`.


## My Solution
```javascript
﻿function addBorder(picture) {
    var totalLength = picture[0].length + 2;
    var topBottom = new Array(totalLength);
    topBottom.fill("*");
    var res = [topBottom.join("")];
    for (var i = 0; i < picture.length; i++) {
        res.push("*" + picture[i] + "*");
    }
    res.push(topBottom.join(""));
    return res;
}
​
```
