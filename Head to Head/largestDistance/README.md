# largestDistance
﻿You are given a set of points on the Cartesian plane. Consider the distance between two points as the maximum difference of their coordinates. For example, the distance between points `(1, 2)` and `(4, 6)` is equal to `max(|4 - 1|, |6 - 2|) = 4`.

Given a set of points, find the pair with the largest distance and return the value of their distance.

**Example**

For `a = [7, 6, 6, 8, 1, 2, 8, 6]`, the output should be
`largestDistance(a) = 7`.

Check out the image below for better understanding:

![](images/example.png)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    Points are given in one array `a`, where `a[2 * i]` is the _x_ coordinate of the `i<sup>th</sup>` point, and `a[2 * i + 1]` is the _y_ coordinate of the `i<sup>th</sup>` point. All coordinates are positive. The number of points is less than `1000`. The points are not necessarily distinct.

    _Guaranteed constraints:_
    `4 ≤ a.length ≤ 10`,
    `0 ≤ a[i] ≤ 50`.

*   **[output] integer**

    The maximum distance between two points from the input set.


## My Solution
```javascript
﻿function largestDistance(a) {
​
  var mx =  [a[2], a[3]] ;
  var mn = [a[0], a[1]];
  for (var i = 0; i < a.length; i++) {
    var k = i % 2;
    if (a[i] > mx[k]) {
      mx[k] = a[i];
    } else if (a[i] < mn[k]) {
      mn[k] = a[i];
    }
  }
  return Math.max(mx[0] - mn[0], mx[1] - mn[1]);
}
​
```
