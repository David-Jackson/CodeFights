# parabole
﻿Given the `x`-coordinate of a point on the [parabole](keyword://parabole) with specified coefficients, find the `y`-coordinate of that point.

**Example**

For `a = 1`, `b = 2`, `c = 3` and `x = -1`, the output should be
`parabole(a, b, c, x) = 2`.

Explanation: `y = ax<sup>2</sup> + bx + c = 1 * (-1)<sup>2</sup> + 2 * (-1) + 3 = 2`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer a**

    _Guaranteed constraints:_
    `-10 ≤ a ≤ 10`.

*   **[input] integer b**

    _Guaranteed constraints:_
    `-10 ≤ b ≤ 10`.

*   **[input] integer c**

    _Guaranteed constraints:_
    `-10 ≤ c ≤ 10`.

*   **[input] integer x**

    The x-coordinate of the point on the parabole.

    _Guaranteed constraints:_
    `-15 · 10<sup>3</sup> ≤ x ≤ 15 · 10<sup>3</sup>`.

*   **[output] integer**

    The y-coordinate of the point on the parabole with the given x-coordinate.


## My Solution
```javascript
﻿function parabole(a, b, c, x) {
    return (a * x * x) + (b * x) + c
}
​
```
