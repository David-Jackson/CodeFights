# countInversionsNaive
﻿Given an array of integers, find the number of [inversions](keyword://inversion) it contains.

**Example**

For `inputArray = [1, 3, 2, 0]`, the output should be
`countInversionsNaive(inputArray) = 4`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    _Guaranteed constraints:_
    `2 ≤ inputArray.length ≤ 5`,
    `-10 ≤ inputArray[i] ≤ 10`.

*   **[output] integer**


## My Solution
```javascript
﻿function countInversionsNaive(inputArray) {
​
  var result = 0;
​
  for (var i = 0; i < inputArray.length; i++) {
    for (var j = i + 1;  j < inputArray.length ; j++) {
      if (inputArray[i] > inputArray[j]) {
        result++;
      }
    }
  }
  return result;
}
​
```
