# makeArrayConsecutive
﻿Given an array of integers, we need to fill in the "holes" such that it contains all the integers from some range.

**Example**

For `sequence = [6, 2, 3, 8]`, the output should be
`makeArrayConsecutive(sequence) = [4, 5, 7]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer sequence**

    An array of _distinct_ integers.

    _Guaranteed constraints:_
    `1 ≤ sequence.length ≤ 10`,
    `-10 ≤ sequence[i] ≤ 10`.

*   **[output] array.integer**

    A sorted array of integers of minimal possible length such that its union with `sequence` contains every integer from an interval `[L, R]` (for some `L, R`) and no other integers.


## My Solution
```javascript
﻿function makeArrayConsecutive(sequence) {
​
  var answer = [],
      current_position = 1;
​
  sequence.sort(function(a, b) { return a - b; });
  for (var i = sequence[0]; i < sequence[sequence.length - 1]; i++) {
    if (sequence[current_position] !== i) {
      answer.push(i);
    }
    else {
      current_position++;
    }
  }
​
  return answer;
}
​
```
