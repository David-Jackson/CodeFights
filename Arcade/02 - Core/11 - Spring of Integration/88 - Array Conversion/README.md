# Array Conversion
﻿Given an array of `2<sup>k</sup>` integers (for some integer `k`), perform the following operations until the array contains only one element:

*   On the `1<sup>st</sup>`, `3<sup>rd</sup>`, `5<sup>th</sup>`, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
*   On the `2<sup>nd</sup>`, `4<sup>th</sup>`, `6<sup>th</sup>`, etc. iterations replace each pair of consecutive elements with their product.

After the algorithm has finished, there will be a single element left in the array. Return that element.

**Example**

For `inputArray = [1, 2, 3, 4, 5, 6, 7, 8]`, the output should be
`arrayConversion(inputArray) = 186`.

We have `[1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186]`, so the answer is `186`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    _Guaranteed constraints:_
    `1 ≤ inputArray.length ≤ 20`,
    `-9 ≤ inputArray[i] ≤ 99`.

*   **[output] integer**


## My Solution
```javascript
﻿function arrayConversion(inputArray) {
    var oddIter = true;
    while (inputArray.length != 1) {
        var arr = [];
        for (var i = 0; i < inputArray.length; i = i + 2) {
            if (oddIter) {
                arr.push(inputArray[i] + inputArray[i + 1]);
            } else {
                arr.push(inputArray[i] * inputArray[i + 1]);
            }
        }
        oddIter = !oddIter;
        inputArray = arr;
    }
    return inputArray[0];
}
​
```
