# Rectangle Rotation
﻿A rectangle with sides equal to even integers `a` and `b` is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point `(0, 0)`, but the sides of the rectangle are not parallel to the axes; instead, they are forming `45` degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

**Example**

For `a = 6` and `b = 4`, the output should be
`rectangleRotation(a, b) = 23`.

The following picture illustrates the example, and the `23` points are marked green.

![](images/rectangle.png)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer a**

    A positive even integer.

    _Guaranteed constraints:_
    `2 ≤ a ≤ 50`.

*   **[input] integer b**

    A positive even integer.

    _Guaranteed constraints:_
    `2 ≤ b ≤ 50`.

*   **[output] integer**

    The number of inner points with integer coordinates.


## My Solution
```javascript
﻿function rectangleRotation(a, b) {
    var r = 0;
    for (var x = -a - b; x <= a + b; x++) {
        for (var y = -a - b; y <= a + b; y++) {
            if (2 * (x - y) * (x - y) <= a * a && 2 * (x + y) * (x + y) <= b * b) r++;
        }
    }
    return r;
}
```
