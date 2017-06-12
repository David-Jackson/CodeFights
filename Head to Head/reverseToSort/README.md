# reverseToSort
﻿Determine if it is possible to sort an array by reversing one of its [contiguous subarrays](keyword://contiguous-subarray).

It's guaranteed that array is not initially sorted.

**Example**

*   For `inputArray = [-1, 5, 4, 3, 2, 8]`, the output should be
    `reverseToSort(inputArray) = true`.

    We can reverse `[5, 4, 3, 2]` to make it sorted.

*   For `inputArray = [1, 3, 2, 5, 4, 6]`, the output should be
    `reverseToSort(inputArray) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    _Guaranteed constraints:_
    `3 ≤ inputArray.length ≤ 10`,
    `-100 ≤ inputArray[i] ≤ 100`.

*   **[output] boolean**

    `true` if it is possible to sort an array (in strictly increasing order) by reversing one of its _contiguous subarrays_, `false` otherwise.


## My Solution
```javascript
﻿function reverseToSort(inputArray) {
​
  for (var i = 0; i < inputArray.length; i++) {
    for (var j = i + 1; j <= inputArray.length; j++) {
      var left = inputArray.slice(0, i),
          middle = inputArray.slice(i, j).reverse(),
          right = inputArray.slice(j, inputArray.length),
          result = [],
          correct = true;
​
      result = left.concat(middle.concat(right));
​
      for (var k = 1; k < result.length; k++) {
        if (result[k - 1] >= result[k]) {
          correct = false;
          break;
        }
      }
      if (correct) {
        return true;
      }
    }
  }
  return false;
}
​
```
