# Unique Digit Products
﻿Let's call `product(x)` the product of `x`'s digits. Given an array of integers `a`, calculate `product(x)` for each `x` in `a`, and return the number of distinct results you get.

**Example**

For `a = [2, 8, 121, 42, 222, 23]`, the output should be
`uniqueDigitProducts(a) = 3`.

Here are the products of the array's elements:

*   `2`: `product(2) = 2`;
*   `8`: `product(8) = 8`;
*   `121`: `product(121) = 1 * 2 * 1 = 2`;
*   `42`: `product(42) = 4 * 2 = 8`;
*   `222`: `product(222) = 2 * 2 * 2 = 8`;
*   `23`: `product(23) = 2 * 3 = 6`.

As you can see, there are only `3` different products: `2`, `6` and `8`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    _Guaranteed constraints:_
    `1 ≤ a.length ≤ 10<sup>5</sup>`,
    `1 ≤ a[i] ≤ 10<sup>9</sup>`.

*   **[output] integer**

    The number of different digit products in `a`.


## My Solution
```javascript
﻿function uniqueDigitProducts(a) {
    return a.map(function(val) {
        var p = 1;
        while (val > 0) {
            p *= (val % 10);
            val = Math.floor(val / 10);
        }
        return p;
    }).reduce(function(acc, val) {
        if (acc.indexOf(val) == -1) acc.push(val);
        return acc;
    }, []).length;
}
​
```
