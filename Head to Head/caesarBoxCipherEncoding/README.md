# caesarBoxCipherEncoding
﻿Caesar Box is a simple transposition cipher used in the Roman Empire, in which characters of the given message are broken into multiple lines that form a square when stacked up and then read the square column by column.

Given a message, encode it.

**Example**

For `inputString = "a message"`, the output should be
`caesarBoxCipherEncoding(inputString) = "aea sgmse"`.

The square will look as follows:

```
a m
ess
age

```

Thus, the encoded message will be `aea sgmse`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A string of length `n<sup>2</sup>` for some integer `n`.

    _Guaranteed constraints:_
    `1 ≤ inputString.length ≤ 16`.

*   **[output] string**


## My Solution
```javascript
﻿function caesarBoxCipherEncoding(inputString) {
    var message = "";
    var sq = Math.sqrt(inputString.length);
    for (var i = 0; i < sq; i++) {
        var offset = 0;
        for (var j = 0; j < sq; j++) {
            message += inputString.charAt(i + offset);
            offset += sq;
        }
    }
    return message;
}
​
```
