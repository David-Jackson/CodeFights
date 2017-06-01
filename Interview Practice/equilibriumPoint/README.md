# equilibriumPoint
﻿Equilibrium position in an array is a position at which the sum of elements before it is equal to the sum of elements after it. Given an array `arr`, your task is to determine at which position equilibrium first occurs in the array. If there is no equilibrium position, the answer should be `-1`.

**Example**

*   For `arr = [5]`, the output should be

    `equilibriumPoint(arr) = 1`.

    Explanation: Since this array only has one element, the equilibrium point is at position `1`.

*   For `arr = [10, 5, 3, 5, 2, 2, 6, 8]`, the output should be

    `equilibriumPoint(arr) = 4`.

    Explanation: The equilibrium point is at position `4`, because the sum of elements before it - `(10 + 5 + 3)` - is equal to the sum of elements after it - `(2 + 2 + 6 + 8)`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer arr**

    _Guaranteed constraints:_

    `1 ≤ arr.length ≤ 10<sup>5</sup>`,

    `-1000 ≤ arr[i] ≤ 1000`.

*   **[output] integer**

    The first equilibrium position in `arr`, or `-1`.


## My Solution
```javascript
﻿function equilibriumPoint(arr) {
    function sum(a, b) {
        return a + b;
    }
    
    var arrSum = arr.reduce(sum);
    var runningSum = 0;
    
    for (var i = 0; i < arr.length; i++) {
        arrSum -= arr[i];
        if (runningSum == arrSum) return i + 1;
        runningSum += arr[i];
    }
    return -1;
}
```
