# endianWar
﻿The fight on whether to store numbers starting with their most significant digit or their least significant digit has been going on for years. It even got a name and is called the [Endian War](https://en.wikipedia.org/wiki/Endianness) by some specialists.

Joe Stoy in his (excellent, by the way) book "Denotational Semantics", tells the following story about Alan Turing: "...One early British computer had numbers running from right to left (because the spot on an oscilloscope tube runs from left to right, but in serial logic the least significant digits are dealt with first). Turing used to mystify audiences at public lectures when, quite by accident, he would slip into this mode even for decimal arithmetic, and write things like `73+42=16`...".

You are given an `expression` that was presumably written by Alan Turing. Return `true` if it is a correct expression written in the little-endian decimal format, or return `false` otherwise.

**Example**

*   For `expression = 73+42=16`, the output should be
    `endianWar(expression) = true`.

    In the little-endian decimal format, the `expression` becomes `37 + 24 = 61`, which is correct.

*   For `expression = "5+8=13"`, the output should be
    `endianWar(expression) = false`.

    In the little-endian decimal format, the result of the `expression` should be `31`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string expression**

    An expression in the format `a+b=c`, where `a`, `b` and `c` are decimal numbers (possibly with leading zeros) that are guaranteed to be smaller than `10<sup>6</sup>`.

    The `expression` is guaranteed to be valid.

*   **[output] boolean**

    Return `true` if `expression` is valid in the little-endian decimal notation, otherwise return `false`.


## My Solution
```javascript
﻿function endianWar(expression) {
    var match = expression.match(/\d+/ig);
    for (var i = 0; i < match.length; i++) {
        match[i] = match[i].split("").reverse().join("");
    }
    return eval(match[0] + "+" + match[1] + "==" + match[2]);
}
​
```
