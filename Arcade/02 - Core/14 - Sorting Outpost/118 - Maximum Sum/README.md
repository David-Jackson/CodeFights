# Maximum Sum
﻿You are given an array of integers `a`. _Range sum query_ is defined by a pair of non-negative integers `l` and `r` (`l <= r`). An output to a _range sum query_ on the given array is the sum of all elements of `a` with indices from `l` to `r` inclusive.

Find an algorithm that given a list of range sum queries `q` can rearrange the array `a` in such a way that the total sum of all of the query outputs is maximized.

**Example**

For `a = [2, 1, 2]` and `q = [[0, 1]]`, the output should be
`maximumSum(a, q) = 4`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    An initial array.

    _Guaranteed constraints:_
    `2 ≤ a.length ≤ 10`,
    `1 ≤ a[i] ≤ 10`.

*   **[input] array.array.integer q**

    Array of _range sum queries_, each query is an array of two non-negative integers.

    _Guaranteed constraints:_
    `1 ≤ q.length ≤ 10`,
    `0 ≤ q[i][0] ≤ q[i][1] < a.length`.

*   **[output] integer**

    Maximum possible total sum of the given range sum query outputs.


## My Solution
```javascript
﻿function maximumSum(a, q) {
    var less = function(a, b) {
        return a - b;
    }
    
    var sumCounts = new Array(a.length).fill(0);
    
    for (var i in q) {
        for (var j = q[i][0]; j <= q[i][1]; j++) {
            sumCounts[j]++;
        }
    }
    
    a.sort(less);
    sumCounts.sort(less);
    
    var res = 0;
    for (var i in a) {
        res += a[i] * sumCounts[i];
    }
    
    return res;
}
​
```
