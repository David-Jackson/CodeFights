# Box Blur
﻿Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply _box blur_ algorithm to the photo to hide its content.

The algorithm works as follows: each pixel `x` in the resulting image has a value equal to the average value of the input image pixels' values from the `3 × 3` square with the center at `x`. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

**Example**

For

```
image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]

```

the output should be `boxBlur(image) = [[1]]`.

In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as `(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = _~rounded down~_ = 1`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer image**

    An image is stored as a rectangular matrix of non-negative integers.

    _Guaranteed constraints:_
    `3 ≤ image.length ≤ 10`,
    `3 ≤ image[0].length ≤ 10`,
    `0 ≤ image[i][j] ≤ 255`.

*   **[output] array.array.integer**

    A blurred image.


## My Solution
```javascript
﻿function boxBlur(image) {
    var res = [];
    for (var y = 0; y < image.length - 2; y++) {
        var line = [];
        for (var x = 0; x < image[y].length - 2; x++) {
            var sum = 0;
            var count = 0;
            for (var a = y; a < y + 3; a++) {
                for (var b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum / count));
        }
        res.push(line);
    }
    return res;
}
​
```
