# quadraticEquation
﻿Solve quadratic equation of the form `a * x<sup>2</sup> + b * x + c = 0` and return sorted array of all its different real roots.

**Example**

*   For `a = 1`, `b = -3` and `c = 2`, the output should be
    `quadraticEquation(a, b, c) = [1, 2]`;
*   For `a = 1`, `b = 2` and `c = 1`, the output should be
    `quadraticEquation(a, b, c) = [-1]`;
*   For `a = 2`, `b = 2` and `c = 1`, the output should be
    `quadraticEquation(a, b, c) = []`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer a**

    _Guaranteed constraints:_
    `-50 ≤ a ≤ 50`,
    `a ≠ 0`.

*   **[input] integer b**

    _Guaranteed constraints:_
    `-50 ≤ b ≤ 50`.

*   **[input] integer c**

    _Guaranteed constraints:_
    `-50 ≤ c ≤ 50`.

*   **[output] array.float**


## My Solution
```javascript
﻿function quadraticEquation(a, b, c) {
​
  var discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  }
  if (discriminant === 0) {
    return [- b / (2 * a)];
  }
  var roots = [];
  roots.push((- b - Math.sqrt(discriminant) ) / (2 * a));
  roots.push((b + Math.sqrt(discriminant) ) / (2 * a));
  if (roots[0] > roots[1]) {
    var tmp = roots[1];
    roots[1] = roots[0];
    roots[0] = tmp;
  }
  return roots;
}
​
```
