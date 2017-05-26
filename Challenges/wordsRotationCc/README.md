# wordsRotationCc
﻿Given a matrix of words of the same length, rotate it 90° in the counterclockwise direction.

**Input/Output**

For

```
words = ["apple", 
         "anger", 
         "monks", 
         "stink"]

```

the output should be

```
wordsRotationCc(words) = ["ersk", 
                          "lekn", 
                          "pgni", 
                          "pnot", 
                          "aams"]

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.string words**

    An array of strings of equal length.

    _Guaranteed constraints:_
    `1 ≤ words.length ≤ 20`,
    `1 ≤ words[i].length ≤ 20`.

*   **[output] array.string**

    The `words` matrix, rotated counterclockwise 90°.


## My Solution
```javascript
﻿function wordsRotationCc(words) {
    var res = [];
    for (var i = words[0].length - 1; i >= 0; i--) {
        var str = "";
        for (var j = 0; j < words.length; j++) {
            str += words[j].charAt(i);
        }
        res.push(str);
    }
    return res;
}
​
```
