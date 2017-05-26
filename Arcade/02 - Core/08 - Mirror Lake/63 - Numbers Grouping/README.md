# Numbers Grouping
﻿You are given an array of integers that you want distribute between several groups. The first group should contain numbers from `1` to `10<sup>4</sup>`, the second should contain those from `10<sup>4</sup> + 1` to `2 * 10<sup>4</sup>`, ..., the `100<sup>th</sup>` one should contain numbers from `99 * 10<sup>4</sup> + 1` to `10<sup>6</sup>` and so on.

All the numbers will then be written down in groups to the text file in such a way that:

*   the groups go one after another;
*   each non-empty group has a header which occupies one line;
*   each number in a group occupies one line.

Calculate how many lines the resulting text file will have.

**Example**

For `a = [20000, 239, 10001, 999999, 10000, 20566, 29999]`, the output should be
`numbersGrouping(a) = 11`.

The numbers can be divided into `4` groups:

*   `239` and `10000` go to the `1<sup>st</sup>` group (`1 ... 10<sup>4</sup>`);
*   `10001` and `20000` go to the second `2<sup>nd</sup>` (`10<sup>4</sup> + 1 ... 2 * 10<sup>4</sup>`);
*   `20566` and `29999` go to the `3<sup>rd</sup>` group (`2 * 10<sup>4</sup> + 1 ... 3 * 10<sup>4</sup>`);
*   groups from `4` to `99` are empty;
*   `999999` goes to the `100<sup>th</sup>` group (`99 * 10<sup>4</sup> + 1 ... 10<sup>6</sup>`).

Thus, there will be `4` groups (i.e. four headers) and `7` numbers, so the file will occupy `4 + 7 = 11` lines.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    _Guaranteed constraints:_
    `1 ≤ a.length ≤ 10<sup>5</sup>`,
    `1 ≤ a[i] ≤ 10<sup>9</sup>`.

*   **[output] integer**

    The number of lines needed to store the grouped numbers.


## My Solution
```javascript
﻿function numbersGrouping(a) {
    var groups = {};
    for (var i = 0; i < a.length; i++) {
        var group = getGroup(a[i]);
        if (!groups[group]) groups[group] = 0;
        groups[group] += 1;
    }
    var headers = 0;
    var lines = 0;
    for (var group in groups) {
        headers += 1;
        lines += groups[group];
    }
    return headers + lines;
}
​
function getGroup(num) {
    return Math.floor((num-1) / 1E4);
}
```
