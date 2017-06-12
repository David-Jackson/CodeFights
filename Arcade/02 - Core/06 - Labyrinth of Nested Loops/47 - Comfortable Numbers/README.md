# Comfortable Numbers
﻿Let's say that number `a` feels _comfortable_ with number `b` if `a ≠ b` and `b` lies in the segment `[a - s(a), a + s(a)]`, where `s(x)` is the sum of `x`'s digits.

How many pairs `(a, b)` are there, such that `a < b`, both `a` and `b` lie on the segment `[l, r]`, and each number feels _comfortable_ with the other?

**Example**

For `l = 10` and `r = 12`, the output should be
`comfortableNumbers(l, r) = 2`.

Here are all values of `s(x)` to consider:

*   `s(10) = 1`, so `10` is _comfortable_ with `9` and `11`;
*   `s(11) = 2`, so `11` is _comfortable_ with `9`, `10`, `12` and `13`;
*   `s(12) = 3`, so `12` is _comfortable_ with `9`, `10`, `11`, `13`, `14` and `15`.

Thus, there are `2` pairs of numbers _comfortable_ with each other within the segment `[10; 12]`: `(10, 11)` and `(11, 12)`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer l**

    _Guaranteed constraints:_
    `1 ≤ l ≤ r ≤ 1000`.

*   **[input] integer r**

    _Guaranteed constraints:_
    `1 ≤ l ≤ r ≤ 1000`.

*   **[output] integer**

    The number of pairs satisfying all the above conditions.


## My Solution
```javascript
﻿function comfortableNumbers(L, R) {
    if (L == R) return 0;
    var a = L;
    var b = a + 1;
    var sumA = 0;
    var pairs = 0;
    while (a < R) {
        var aStr = a.toString();
        var aX = 0;
        while (aX < aStr.length) {
            sumA = sumA + parseInt(aStr[aX]+"");
            aX = aX + 1;
        }
        while (b <= R) {
            var bStr = b.toString();
            var bX = 0, sumB = 0;
 
            while (bX < bStr.length) {
                sumB = sumB + parseInt(bStr[bX]+"");
                bX = bX + 1;
            }
 
            if((b >= a - sumA) && (b <= a + sumA)&&
              (a >= b - sumB) && (a <= b + sumB)) {
                pairs = pairs + 1;
            }
 
            b = b + 1;
        }
 
        a = a + 1;
        b = a + 1;
        sumA = 0;
    }
    return pairs;
}
​
```
