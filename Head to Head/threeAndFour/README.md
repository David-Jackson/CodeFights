# threeAndFour
﻿Return a sorted array of all non-negative numbers less than the given `n` which are divisible both by `3` and `4`.

**Example**

For `n = 30`, the output should be
`threeAndFour(n) = [0, 12, 24]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n ≤ 100`.

*   **[output] array.integer**


## My Solution
```javascript
﻿function threeAndFour(n) {
  var result = [];
  for (var counter = 0; counter < n; counter++) {
    if (counter % 3 === 0 && counter % 4 === 0)
      result.push(counter);
  }
  return result;
}
​
```
