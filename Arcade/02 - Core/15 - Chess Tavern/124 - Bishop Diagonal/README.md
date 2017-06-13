# Bishop Diagonal
﻿In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the _same diagonal_, they immediately rush towards the opposite ends of that same diagonal.

Given the initial positions (in chess notation) of two bishops, `bishop1` and `bishop2`, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.

**Example**

*   For `bishop1 = "d7"` and `bishop2 = "f5"`, the output should be
    `bishopDiagonal(bishop1, bishop2) = ["c8", "h3"]`.

    ![](images/ex_1.jpg)

*   For `bishop1 = "d8"` and `bishop2 = "b5"`, the output should be
    `bishopDiagonal(bishop1, bishop2) = ["b5", "d8"]`.

    The bishops don't belong to the same diagonal, so they don't move.
    ![](images/ex_2.jpg)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string bishop1**

    Coordinates of the first bishop in [chess notation](keyword://chess-notation).

*   **[input] string bishop2**

    Coordinates of the second bishop in the same notation.

*   **[output] array.string**

    Coordinates of the bishops in [lexicographical order](keyword://lexicographical-order-for-strings) after they check the diagonals they stand on.


## My Solution
```javascript
﻿function bishopDiagonal(bishop1, bishop2) {
    var res = [bishop1, bishop2].sort(),
        bishop1 = res[0],
        bishop2 = res[1],
        b1y = bishop1.charCodeAt(0),
        b2y = bishop2.charCodeAt(0),
        b1x = bishop1.charCodeAt(1),
        b2x = bishop2.charCodeAt(1),
        slope = (b1y - b2y) / (b1x - b2x);
    if (Math.abs(slope) == 1) {
        while (b1x > 49 && b1x < 56 && b1y > 97 && b1y < 104) {
            b1x += -slope;
            b1y -= 1;
        }
        while (b2x > 49 && b2x < 56 && b2y > 97 && b2y < 104) {
            b2x += slope;
            b2y += 1;
        }
        res = [
            String.fromCharCode(b1y) + String.fromCharCode(b1x),
            String.fromCharCode(b2y) + String.fromCharCode(b2x)
        ]
    }
    return res;
}
​
```
