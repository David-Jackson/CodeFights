# Strings Crossover
﻿Define _crossover operation_ over two equal-length strings `A` and `B` as follows:

*   the result of that operation is a string of the same length as the input strings
*   `result[i]` is either A[i] or B[i], chosen at random

Given array of strings `inputArray` and a string `result`, find for how many pairs of strings from `inputArray` the result of the crossover operation over them may be equal to `result`.

Note that `(A, B)` and `(B, A)` are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

**Example**

For `inputArray = ["abc", "aaa", "aba", "bab"]` and `result = "bbb"`, the output should be
`stringsCrossover(inputArray, result) = 2`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.string inputArray**

    A non-empty array of equal-length strings.

    _Guaranteed constraints:_
    `2 ≤ inputArray.length ≤ 10`,
    `1 ≤ inputArray[i].length ≤ 10`.

*   **[input] string result**

    A string of the same length as each of the `inputArray` elements.

    _Guaranteed constraints:_
    `result.length = inputArray[i].length`.

*   **[output] integer**


## My Solution
```javascript
﻿function stringsCrossover(inputArray, result) {
    function canCross(s1, s2, res) {
        for (var i = 0; i < res.length; i++) {
            if (s1[i] != res[i] && s2[i] != res[i]) return false;
        }
        return true;
    }
    var count = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        var a = inputArray[i];
        for (var j = i + 1; j < inputArray.length; j++) {
            var b = inputArray[j];
            if (canCross(a, b, result)) count++;
        }
    }
    return count;
}
​
```
