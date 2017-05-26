# changeOfVowelsInCycle
﻿Given a `text`, reverse its characters and shift all of the vowels in a `cycle`.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'` and can be upper- and lowercase.

**Example**

For `cycle = 1` and `text = "potato"`, the output should be
`changeOfVowelsInCycle(cycle, text) = "ototap"`.

Reversed, the `text` becomes `"otatop"`. The vowels in the text are `'o'`, `'a'` and `'o'` (in this exact order). When shifted by one, they become `'o'`, `'o'` and `'a'`, so the final answer is `"ototap"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer cycle**

    A number that defines by how many characters the vowels should be shifted.

    _Guaranteed constraints:_
    `1 ≤ cycle ≤ 350`.

*   **[input] string text**

    The text, consisting of upper- and lowercase English letters and whitespace characters.

    _Guaranteed constraints:_
    `1 ≤ word.length ≤ 100`.

*   **[output] string**

    The `text`, modified as described above.


## My Solution
```javascript
function changeOfVowelsInCycle(cycle, text) {
    text = text.split("").reverse().join("");
    var vowels = text.match(/[aeiou]/ig);
    if (vowels) {
        vowels = shiftArr(vowels, cycle);
        text = text.split("");
        var vowelIndex = 0;
        for (var i = 0; i < text.length; i++) {
            if (vowels.indexOf(text[i]) != -1) {
                text[i] = vowels[vowelIndex];
                vowelIndex++;
            }
        }
        text = text.join("");
    }
    return text;
}

function shiftArr(arr, num) {
    for (var i = 0; i < num; i++) {
        var tmp = arr.pop();
        arr = [tmp].concat(arr);
    }
    return arr;
}
```
