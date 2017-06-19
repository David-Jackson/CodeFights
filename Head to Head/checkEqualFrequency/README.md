# checkEqualFrequency
﻿Given array of integers, check whether each integer, that occurs in it, is contained there the same number of times as any other integer from the given array.

**Example**

*   For `inputArray = [1, 2, 2, 1]`, the output should be
    `checkEqualFrequency(inputArray) = true`;
*   For `inputArray = [1, 2, 2, 3, 1, 3, 1, 3]`, the output should be
    `checkEqualFrequency(inputArray) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    _Guaranteed constraints:_
    `1 ≤ inputArray.length ≤ 5 · 10<sup>4</sup>`,
    `1 ≤ inputArray[i] ≤ 4 · 10<sup>8</sup>`.

*   **[output] boolean**


## My Solution
```javascript
﻿function checkEqualFrequency(inputArray) {
​
  var numberOfEqual = 1;
​
  inputArray.sort();
​
  while (numberOfEqual < inputArray.length
      && inputArray[numberOfEqual - 1] === inputArray[numberOfEqual]) {
    numberOfEqual++;
  }
​
  if (inputArray.length % numberOfEqual) {
    return false;
  }
​
  for (var i = 0; i < inputArray.length; i = i + numberOfEqual) {
    if (i && inputArray[i] === inputArray[i - 1]) {
      return false;
    }
    for (var j = i + 1; j < i + numberOfEqual; j++) {
      if (inputArray[j] !== inputArray[j - 1]) {
        return false;
      }
    }
  }
​
  return true;
```
