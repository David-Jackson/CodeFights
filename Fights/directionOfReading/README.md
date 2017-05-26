# directionOfReading
﻿You have an array of non-negative integers `numbers`, each less than `10<sup>numbers.length</sup>`. Add leading zeros if necessary so that for each `i`, `numbers[i]` has exactly `numbers.length` digits. Now, write these integers under each other in the same order that they appear in the input array.

From this process, you obtain a square that consists of digits. If you read them from left to right, starting from the topmost row, and drop the leading zeros, you get the initial array. What array will you get if you read the digits from the top down, starting from the leftmost column, and ignoring leading zeros?

**Example**

For `numbers = [12, 345, 67, 5]`, the output should be
`directionOfReading(numbers) = [0, 300, 1460, 2575]`.

The square obtained in the intermediate step looks like this:

```
0012
0345
0067
0005

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer numbers**

    _Guaranteed constraints:_
    `1 ≤ numbers.length ≤ 9`,
    `0 ≤ a[i] < 10<sup>numbers.length</sup>`.

*   **[output] array.integer**


## My Solution
```javascript
﻿function directionOfReading(numbers) {
    var res = [];
    for (var i = 0; i < numbers.length; i++) {
        var arr = new Array(numbers.length);
        arr.fill(0);
        var pos = numbers.length - 1;
        while (numbers[i] > 0) {
            var r = numbers[i] % 10;
            arr[pos] = r;
            pos--;
            numbers[i] -= r;
            numbers[i] /= 10;
        }
        res.push(arr);
    }
    var output = new Array(numbers.length);
    output.fill(0);
    for (var x = 0; x < res[0].length; x++) {
        for (var y = 0; y < res.length; y++) {
            output[x] *= 10;
            output[x] += res[y][x];
        }
    }
    return output;
}
​
```
