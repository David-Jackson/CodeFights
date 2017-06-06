# Boxes Packing
﻿You are given `n` rectangular boxes, the `i<sup>th</sup>` box has the length `length<sub>i</sub>`, the width `width<sub>i</sub>` and the height `height<sub>i</sub>`. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of `n` different numbers `p<sub>i</sub>` (`1 ≤ p<sub>i</sub> ≤ n`) that for each `1 ≤ i < n` the box number `p<sub>i</sub>` can be put into the box number `p<sub>i+1</sub>`.
A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.

**Example**

*   For `length = [1, 3, 2]`, `width = [1, 3, 2]` and `height = [1, 3, 2]`, the output should be
    `boxesPacking(length, width, height) = true`;
*   For `length = [1, 1]`, `width = [1, 1]` and `height = [1, 1]`, the output should be
    `boxesPacking(length, width, height) = false`;
*   For `length = [3, 1, 2]`, `width = [3, 1, 2]` and `height = [3, 2, 1]`, the output should be
    `boxesPacking(length, width, height) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer length**

    Array of positive integers.

    _Guaranteed constraints:_
    `1 ≤ length.length ≤ 10<sup>4</sup>`,
    `1 ≤ length[i] ≤ 2 · 10<sup>4</sup>`.

*   **[input] array.integer width**

    Array of positive integers.

    _Guaranteed constraints:_
    `width.length = length.length`,
    `1 ≤ width[i] ≤ 2 · 10<sup>4</sup>`.

*   **[input] array.integer height**

    Array of positive integers.

    _Guaranteed constraints:_
    `height.length = length.length`,
    `1 ≤ height[i] ≤ 2 · 10<sup>4</sup>`.

*   **[output] boolean**

    `true` if it is possible to put all boxes into one, `false` otherwise.


## My Solution
```javascript
﻿function boxesPacking(length, width, height) {
    var n = length.length,
        p = [];
    for (var i = 0; i < n; i++) {
        p.push(i);
    }
    for (var it = 0; it < n; it++) {
        for (var i = 0; i < n - 1; i++) {
            var volumeF = length[p[i]] * width[p[i]] * height[p[i]];
            var volumeS = length[p[i + 1]] * width[p[i + 1]] * height[p[i + 1]];
            if (volumeF > volumeS) {
                var tmp = p[i];
                p[i] = p[i + 1];
                p[i + 1] = tmp;
            }
        }
    }
    var isCorrectSequence = true;
    for (var i = 0; i < n - 1; i++) {
        var pi = p[i],
            pj = p[i + 1],
            canSwap = false;
        canSwap |= (length[pi] < length[pj] && width[pi] < width[pj] && height[pi] < height[pj]);
        canSwap |= (length[pi] < length[pj] && width[pi] < width[pj] && height[pi] < height[pj]);
        canSwap |= (length[pi] < length[pj] && width[pi] < height[pj] && height[pi] < width[pj]);
        canSwap |= (length[pi] < width[pj] && width[pi] < length[pj] && height[pi] < height[pj]);
        canSwap |= (length[pi] < width[pj] && width[pi] < height[pj] && height[pi] < length[pj]);
        canSwap |= (length[pi] < height[pj] && width[pi] < length[pj] && height[pi] < width[pj]);
        canSwap |= (length[pi] < height[pj] && width[pi] < width[pj] && height[pi] < length[pj]);
        isCorrectSequence &= canSwap;
    }
    return isCorrectSequence;
}
```
