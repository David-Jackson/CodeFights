# shapeArea
﻿Below we will define an `n`-interesting polygon. Your task is to find the area of a polygon for a given `n`.

A `1`-interesting polygon is just a square with a side of length `1`. An `n`-interesting polygon is obtained by taking the `n - 1`-interesting polygon and appending `1`-interesting polygons to its rim, side by side. You can see the `1`-, `2`-, `3`- and `4`-interesting polygons in the picture below.

![](images/area.png)

**Example**

*   For `n = 2`, the output should be
    `shapeArea(n) = 5`;
*   For `n = 3`, the output should be
    `shapeArea(n) = 13`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n < 10<sup>4</sup>`.

*   **[output] integer**

    The area of the `n`-interesting polygon.


## My Solution
```javascript
﻿function shapeArea(n) {
    var area = 0;
    var size = 1;
    for (var i = 1; i < n; i++) {
        area += (2 * size);
        size += 2;
    }
    area += size;
    return area;
}
​
```
