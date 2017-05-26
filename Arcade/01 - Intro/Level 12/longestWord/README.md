# longestWord
﻿Define a _word_ as a sequence of consecutive English letters. Find the longest _word_ from the given string.

**Example**

For `text = "Ready, steady, go!"`, the output should be
`longestWord(text) = "steady"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string text**

    _Guaranteed constraints:_
    `4 ≤ text.length ≤ 50`.

*   **[output] string**

    The longest _word_ from `text`. It's guaranteed that there is a unique output.


## My Solution
```javascript
﻿function longestWord(text) {
    var maxWord = "";
    var word = "";
    var isLetter = function(x) {
        var c = x.charCodeAt(0);
        return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
    }
    for (var i = 0; i < text.length; i++) {
        if (isLetter(text[i])) {
            word += text[i];
        } else {
            if (word.length > maxWord.length) {
                maxWord = word;
            }
            word = "";
        }
    }
    if (word.length > maxWord.length) {
        maxWord = word;
    }
    return maxWord;
}
​
```
