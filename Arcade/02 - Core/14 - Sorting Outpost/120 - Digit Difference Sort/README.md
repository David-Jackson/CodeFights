# Digit Difference Sort
﻿Given an array of integers, sort its elements by the _difference_ of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.

**Example**

For `a = [152, 23, 7, 887, 243]`, the output should be
`digitDifferenceSort(a) = [7, 887, 23, 243, 152]`.

Here are the _differences_ of all the numbers:

*   `152`: `difference = 5 - 1 = 4`;
*   `23`: `difference = 3 - 2 = 1`;
*   `7`: `difference = 7 - 7 = 0`;
*   `887`: `difference = 8 - 7 = 1`;
*   `243`: `difference = 4 - 2 = 2`.

`23` and `887` have the same _difference_, but `887` goes after `23` in `a`, so in the sorted array it comes first.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    An array of integers.

    _Guaranteed constraints:_
    `0 ≤ sequence.length ≤ 10<sup>4</sup>`,
    `1 ≤ sequence[i] ≤ 10<sup>5</sup>`.

*   **[output] array.integer**

    Array `a` sorted as described above.


## My Solution
```javascript
﻿function digitDifferenceSort(a) {
    function digitDifference(x) {
        var max = 0; 
        var min = Infinity;
        while (x > 0) {
            var r = x % 10;
            x = Math.floor(x / 10);
            max = Math.max(max, r);
            min = Math.min(min, r);
        }
        return max - min;
    }
    return a.map(function(val, index, arr) {
        var dd = digitDifference(val);
        return {
            val: val,
            index: index,
            dd: dd
        }
    }).sort(function(x, y) {
        if (x.dd > y.dd) return 1;
        if (x.dd < y.dd) return -1;
        if (x.index > y.index) return -1;
        if (x.index < y.index) return 1;
    }).map(function(val) {
        return val.val;
    });
}
​
```
