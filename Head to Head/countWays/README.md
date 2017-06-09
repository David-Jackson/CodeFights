# countWays
﻿Given integers `n` and `k`, find the number of the ways to choose `k` objects out of `n` different ones modulo `10<sup>9</sup> + 7`. _Note_ that the order doesn't matter.

**Example**

For `n = 5` and `k = 2`, the output should be
`countWays(n, k) = 10`.
Here are all possible ways to choose `2` objects out of `5` if we number them from `1` to `5`:

```
[1, 2], [1, 3], [1, 4], [1, 5],
[2, 3], [2, 4], [2, 5],
[3, 4], [3, 5],
[4, 5]

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A non-negative integer.

    _Guaranteed constraints:_
    `5 ≤ n ≤ 10<sup>5</sup>`.

*   **[input] integer k**

    A non-negative integer.

    _Guaranteed constraints:_
    `2 ≤ k ≤ 10<sup>5</sup>`,
    `n · k ≤ 10<sup>6</sup>`.

*   **[output] integer**

    Number of the ways to choose `k` objects out of `n` different objects modulo `10<sup>9</sup> + 7`.


## My Solution
```javascript
﻿function countWays(n, k) {
    var ways = [];
    for (var i = 0; i <= n; i++) {
        var arr = [];
        for (var j = 0; j <= k; j++) {
            arr.push(0);
        }
        ways.push(arr);
    }
    ways[0][0] = 1;
    for (var i = 0; i < n; i++) {
        var cur = ways[i];
        var next = ways[i + 1];
        for (var j = 0; j <= k; j++) {
            if (i + 1 <= n) {
                next[j] = (next[j] + cur[j]) % (1e9 + 7);
                if (j + 1 <= k) {
                    next[j + 1] = (next[j + 1] + cur[j]) % (1e9 + 7);
                }
            }
        }
    }
    return ways[n][k];
}
​
```
