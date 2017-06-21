# fullSquareOrCube
﻿You've got a role in TV series "The Walking Dead"!
Now you are trying to crack a safe with a gun, which you need to survive, zombies are very close. But you see a note on the safe. It says that the password is a full square or a full cube. Also there is the `number` on this note. You should determine how many variants are there to rearrange the digits of the `number` to make a correct password. If the given `number` is already a full square or a full cube, you should just add this variant of rearranging to the answer.

**Example**

*   For `number = 414`, the output should be
    `fullSquareOrCude(number) = 2`.
    You can get numbers `144`, which is a full square of `12`, and `441`, which is a full square of `21`.
*   For `number = 64`, the output should be
    `fullSquareOrCube(number) = 1`.
    The number `64` is a full square of `8` and a full cube of `4`.
*   For `number = 71`, the output should be
    `fullSquareOrCube(number) = 0`.
    `71` and `17` aren't full squares or full cubes.

*   **[time limit] 4000ms (js)**

*   **[input] integer number**

    An integer, number on the note. `0 ≤ number < 1000`.

*   **[output] integer**

    The number of variants to rearrange digits of the `number` to get a full square or a full cube.


## My Solution
```javascript
﻿function fullSquareOrCube(number) {
    function numToArr(x) {
        var arr = [];
        while (x > 0) {
            arr.push(x % 10);
            x = Math.floor(x / 10);
        }
        return arr;
    }
    function arrToNum (acc, val) {
        return (acc * 10) + val;
    }
    function sortDesc (a, b) {
        return a < b;
    }
    var count = 0;
    var digits = numToArr(number);
    var max = digits.sort(sortDesc).reduce(arrToNum, 0);
    var x = 0;
    var sq = 0;
    var cu = 0;
    var used = [];
    while (sq <= max || cu <= max) {
        if (max == numToArr(sq).sort(sortDesc).reduce(arrToNum, 0) && used.indexOf(sq) == -1) {
            count++;
```
