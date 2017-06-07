# setUnion
﻿Apply union operation to the given sets of integers.

Sets may contain duplicate elements.

**Example**

For `a = [1, 1]` and `b = [1, 1, 1]`, the output should be
`setUnion(a, b) = [1, 1, 1]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    Array representing set `a` (elements can be stored in any order).

    _Guaranteed constraints:_
    `2 ≤ a.length ≤ 10`,
    `1 ≤ a[i] ≤ 15`.

*   **[input] array.integer b**

    Array representing set `b` (elements can be stored in any order).

    _Guaranteed constraints:_
    `2 ≤ b.length ≤ 10`,
    `1 ≤ b[i] ≤ 15`.

*   **[output] array.integer**

    Array representing union of sets `a` and `b` (elements should be placed in non-decreasing order).


## My Solution
```javascript
﻿function setUnion(a, b) {
​
  var compareNumbers = function(a, b) {
    return a - b;
  }
​
  var c = [];
  var pos_b = 0;
​
  a.sort(compareNumbers);
  b.sort(compareNumbers);
​
  for (var pos_a = 0; pos_a < a.length; pos_a++) {
    while (pos_b < b.length && b[pos_b] < a[pos_a]) {
      c.push(b[pos_b]);
      pos_b++;
    }
    c.push(a[pos_a]);
    if (a[pos_a] === b[pos_b]) {
      pos_b++;
    }
  }
  while (pos_b < b.length) {
    c.push(b[pos_b]);
    pos_b++;
  }
​
  return c;
}
​
```
