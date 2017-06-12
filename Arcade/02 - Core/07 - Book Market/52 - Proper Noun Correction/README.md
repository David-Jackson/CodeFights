# Proper Noun Correction
﻿_Proper nouns_ always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.

**Example**

*   For `noun = "pARiS"`, the output should be
    `properNounCorrection(noun) = "Paris"`;
*   For `noun = "John"`, the output should be
    `properNounCorrection(noun) = "John"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string noun**

    A string representing a proper noun with a mix of capital and small Latin letters.

    _Guaranteed constraints:_
    `1 ≤ noun.length ≤ 10`.

*   **[output] string**

    Corrected (if needed) noun.


## My Solution
```javascript
﻿function properNounCorrection(noun) {
    noun = noun.toLowerCase();
    var arr = noun.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}
​
```
