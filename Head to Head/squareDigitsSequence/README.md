# squareDigitsSequence
﻿Consider a sequence of numbers `a<sub>0</sub>`, `a<sub>1</sub>`, ..., `a<sub>n</sub>`, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element `a0`, find the length of the sequence.

**Example**

*   For `a0 = 16`, the output should be
    `squareDigitsSequence(a0) = 9`.

    Here's how elements of the sequence are constructed:

    *   `a<sub>0</sub> = 16`
    *   `a<sub>1</sub> = 1<sup>2</sup> + 6<sup>2</sup> = 37`
    *   `a<sub>2</sub> = 3<sup>2</sup> + 7<sup>2</sup> = 58`
    *   `a<sub>3</sub> = 5<sup>2</sup> + 8<sup>2</sup> = 89`
    *   `a<sub>4</sub> = 8<sup>2</sup> + 9<sup>2</sup> = 145`
    *   `a<sub>5</sub> = 1<sup>2</sup> + 4<sup>2</sup> + 5<sup>2</sup> = 42`
    *   `a<sub>6</sub> = 4<sup>2</sup> + 2<sup>2</sup> = 20`
    *   `a<sub>7</sub> = 2<sup>2</sup> + 0<sup>2</sup> = 4`
    *   `a<sub>8</sub> = 4<sup>2</sup> = 16`, which has already occurred before (`a<sub>0</sub>`)

    Thus, there are `9` elements in the sequence.

*   For `a0 = 103`, the output should be
    `squareDigitsSequence(a0) = 4`.

    The sequence goes as follows: `103 -> 10 -> 1 -> 1`, `4` elements altogether.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer a0**

    First element of a sequence, positive integer.

    _Guaranteed constraints:_
    `1 ≤ a0 ≤ 650`.

*   **[output] integer**


## My Solution
```javascript
﻿function squareDigitsSequence(a0) {
​
  var cur = a0,
      was = [];
​
  while (was.indexOf(cur) === -1) {
    was.push(cur);
    var next = 0;
    while (cur > 0) {
      next += (cur % 10) * (cur % 10);
      cur = Math.floor(cur / 10);
    }
    cur = next;
  }
​
  return  was.length + 1 ;
}
​
```
