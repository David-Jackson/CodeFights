# Make Array Consecutive 2
﻿Ratiorg got `statues` of _different_ sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by `1`. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

**Example**

For `statues = [6, 2, 3, 8]`, the output should be
`makeArrayConsecutive2(statues) = 3`.

Ratiorg needs statues of sizes `4`, `5` and `7`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer statues**

    An array of _distinct_ non-negative integers.

    _Guaranteed constraints:_
    `1 ≤ statues.length ≤ 10`,
    `0 ≤ statues[i] ≤ 20`.

*   **[output] integer**

    The minimal number of statues that need to be added to existing `statues` such that it contains every integer size from an interval `[L, R]` (for some `L, R`) and no other sizes.


## My Solution
```javascript
﻿function makeArrayConsecutive2(sequence) {
    sequence = sequence.sort(function(a,b){return a - b});
    var holes = [];
    for (var i = sequence[0]; i < sequence[sequence.length - 1]; i++) {
        if (sequence.indexOf(i) == -1) {
            holes.push(i);
        } 
    }
    return holes.length;
}
​
```
