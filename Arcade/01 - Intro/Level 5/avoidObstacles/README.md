# avoidObstacles
﻿You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate `0` to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

**Example**

For `inputArray = [5, 3, 6, 7, 9]`, the output should be
`avoidObstacles(inputArray) = 4`.

Check out the image below for better understanding:

![](images/example.png)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    Non-empty array of positive integers.

    _Guaranteed constraints:_
    `2 ≤ inputArray.length ≤ 10`,
    `1 ≤ inputArray[i] ≤ 40`.

*   **[output] integer**

    The desired length.


## My Solution
```javascript
﻿function avoidObstacles(inputArray) {
    inputArray.sort(function (a, b) {
        return a > b;
    });
    var jump = 1;
    while (true) {
        var success = true;
        for (var i = 0; 
             i <= inputArray[inputArray.length - 1]; 
             i = i + jump) {
            if (inputArray.indexOf(i) != -1) {
                success = false;
                break;
            }
        }
        if (success) {
            break;
        } else {
            jump++;
        }
    }
    return jump;
}
​
```
