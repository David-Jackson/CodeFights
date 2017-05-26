# Timed Reading
﻿Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than `maxLength`, he simply skipped it and read on.

Help the teacher figure out how many words the boy has read by calculating the number of words in the `text` he has read, no longer than `maxLength`.
Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.

**Example**

For `maxLength = 4` and
`text = "The Fox asked the stork, 'How is the soup?'"`,
the output should be
`timedReading(maxLength, text) = 7`.

The boy has read the following words: `"The", "Fox", "the", "How", "is", "the", "soup"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer maxLength**

    A positive integer, the maximum length of the word the boy can read.

    _Guaranteed constraints:_
    `1 ≤ maxLength ≤ 10`.

*   **[input] string text**

    A non-empty string of English letters and punctuation marks.

    _Guaranteed constraints:_
    `3 ≤ text.length ≤ 110`.

*   **[output] integer**

    The number of words the boy has read.


## My Solution
```javascript
﻿function timedReading(maxLength, text) {
    var wordsRead = 0;
    var curWordLength = 0;
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (isLetterCode(c)) {
            curWordLength++;
        } else {
            if (curWordLength != 0 && curWordLength <= maxLength) {
                wordsRead++;
            }
            curWordLength = 0
        }
    }
    if (curWordLength != 0 && curWordLength <= maxLength) {
        wordsRead++;
    }
    return wordsRead;
}
​
function isLetterCode(x) {
    return (65 <= x && x <= 90) || (97 <= x && x <= 122);
}
```
