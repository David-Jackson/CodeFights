# adjacentElementsProduct
﻿Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

**Example**

For `inputArray = [3, 6, -2, -5, 7, 3]`, the output should be
`adjacentElementsProduct(inputArray) = 21`.

`7` and `3` produce the largest product.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    An array of integers containing at least two elements.

    _Guaranteed constraints:_
    `2 ≤ inputArray.length ≤ 10`,
    `-1000 ≤ inputArray[i] ≤ 1000`.

*   **[output] integer**

    The largest product of adjacent elements.


## My Solution
```javascript
﻿function adjacentElementsProduct(inputArray) {
​
  var best = inputArray[0] * inputArray[1],
      cur = best;
  for (var i = 1; i < inputArray.length - 1; i++) {
    cur = inputArray[i] * inputArray[i + 1];
    if (cur > best) {
      best = cur;
    }
  }
​
  return best;
}
​
```
