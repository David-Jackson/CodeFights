# sequencePeakElement
﻿We call an element of an array its _peak_ if the array is strictly increasing on the left side of the _peak_ and strictly decreasing on its right side. So if we have an array called `sequence` of length `n`, `sequence[k]` is a _peak_ if and only if

`sequence[0] < sequence[1] < ... < sequence[k]`

and

`sequence[k] > sequence[k + 1] > ... > sequence[n - 1]`

Knowing that `sequence` definitely has a _peak_ and that the _peak_ is not its first or last element, find the _peak's_ value.

**Example**

For `sequence = [1, 2, 4, 7, 9, 3, -2, -10]`, the output should be
`sequencePeakElement(sequence) = 9`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer sequence**

    _Guaranteed constraints:_
    `3 ≤ sequence.length ≤ 10`,
    `-100 ≤ sequence[i] ≤ 100`.

*   **[output] integer**


## My Solution
```javascript
﻿function sequencePeakElement(sequence) {
  var left = 1;
  var right = sequence.length - 2;
  while (left < right) {
    var middle = Math.floor((right + left) / 2) ;
    if (sequence[middle] > Math.max(sequence[middle - 1], sequence[middle + 1])) {
      left = right = middle;
      break;
    }
    if (sequence[middle - 1] < sequence[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return sequence[left];
}
​
```
