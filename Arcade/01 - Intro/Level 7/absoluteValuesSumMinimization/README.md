# absoluteValuesSumMinimization
﻿Given a sorted array of integers `a`, find such an integer `x` that the value of

```
abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

```

is the _smallest possible_ (here `abs` denotes the absolute value).
If there are several possible answers, output the _smallest_ one.

**Example**

For `a = [2, 4, 7]`, the output should be
`absoluteValuesSumMinimization(a) = 4`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    A non-empty array of integers, sorted in ascending order.

    _Guaranteed constraints:_
    `1 ≤ a.length ≤ 200`,
    `-10<sup>6</sup> ≤ a[i] ≤ 10<sup>6</sup>`.

*   **[output] integer**


## My Solution
```javascript
﻿function absoluteValuesSumMinimization(a) {
    var absSum = function(arr, x) {
        sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += Math.abs(arr[i] - x);
        }
        return sum;
    }
    var minSum = undefined;
    var minX = undefined;
    for (var i = 0; i < a.length; i++) {
        var x = a[i];
        var sum = absSum(a, x);
        if (minSum == undefined || sum < minSum) {
            minSum = sum;
            minX = x;
        }
    }
    return minX;
}
​
```
