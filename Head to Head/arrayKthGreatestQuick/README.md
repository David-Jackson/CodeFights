# arrayKthGreatestQuick
﻿Given an array of distinct integers, find its `k<sup>th</sup>` greatest element.

**Example**

For `inputArray = [19, 32, 11, 23]` and `k = 3`, the output should be
`arrayKthGreatestQuick(inputArray, k) = 19`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    An array of distinct integers.

    _Guaranteed constraints:_
    `1 ≤ inputArray.length ≤ 5 · 10<sup>4</sup>`,
    `-10<sup>5</sup> ≤ inputArray[i] ≤ 10<sup>5</sup>`.

*   **[input] integer k**

    A positive integer not exceeding `inputArray` length.

    _Guaranteed constraints:_
    `1 ≤ k ≤ inputArray.length`.

*   **[output] integer**

    `k<sup>th</sup>` greatest element of `inputArray`.


## My Solution
```javascript
﻿function arrayKthGreatestQuick(inputArray, k) {
​
  var pos = Math.floor(Math.random() * inputArray.length);
  var left = [];
  var right = [];
​
  if (inputArray.length === 1) {
    return inputArray[0];
  }
​
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[pos] > inputArray[i]) {
      left.push(inputArray[i]);
    } else {
      right.push(inputArray[i]);
    }
  }
​
  if (right.length >= k) {
    return arrayKthGreatestQuick(right, k);
  }
  return arrayKthGreatestQuick(left, k - right.length);
}
​
```
