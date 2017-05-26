# digitsProduct
﻿Given an integer `product`, find the smallest **positive** integer the product of whose digits is equal to `product`. If there is no such integer, return `-1` instead.

**Example**

*   For `product = 12`, the output should be
    `digitsProduct(product) = 26`;
*   For `product = 19`, the output should be
    `digitsProduct(product) = -1`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer product**

    _Guaranteed constraints:_
    `0 ≤ product ≤ 600`.

*   **[output] integer**


## My Solution
```javascript
﻿function digitsProduct(product) {
    var answerDigits = [],
        answer = 0;
    if (!product) {
        return 10;
    }
    if (product === 1) {
        return 1;
    }
    for (var divisor = 9; divisor > 1; divisor--) {
        while (product % divisor === 0) {
            product /= divisor;
            answerDigits.push(divisor);
        }
    }
    if (product > 1) {
        return -1;
    }
    for (var i = answerDigits.length - 1; i >= 0; i--) {
        answer = answer + answerDigits[i] * Math.pow(10, i);
    }
    return answer;
}
```
