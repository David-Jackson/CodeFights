# quadZip
﻿Your task is to implement the `quadZip` function, which _zips_ four strings. Here's how the function should work: It should take the first character from each string, then the second character from each string, and so on, until no characters are left in the longest string.

Given four strings, aptly named `one`, `two`, `three`, and `four`, apply the `quadZip` function to them and return the answer.

**Example**

For `one = "one"`, `two = "two"`, `three = "three"` and `four = "four"`,
the output should be
`quadZip(one, two, three, four) = "ottfnwhoeoruere"`.

Here's how the answer can be obtained:

1.  Take the first character of each string: `"ottf"`;
2.  Take the second character of each string: `"nwho"`;
3.  Take the third character of each string: `"eoru"`;
4.  There are no characters left in the first two words, so the fourth letter can be taken from the third and the fourth words: `"er"`;
5.  Now the only characters left are in the third word, so the last character is `"e"`.

Thus, the final answer is `"ottfnwhoeoruere"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string one**

    _Guaranteed constraints:_
    `1 ≤ one.length ≤ 75`.

*   **[input] string two**

    _Guaranteed constraints:_
    `1 ≤ two.length ≤ 75`.

*   **[input] string three**

    _Guaranteed constraints:_
    `1 ≤ three.length ≤ 75`.

*   **[input] string four**

    _Guaranteed constraints:_
    `1 ≤ four.length ≤ 100`.

*   **[output] string**

    The four words, _zipped_ together.


## My Solution
```javascript
﻿function quadZip(one, two, three, four) {
    var arr = [one, two, three, four];
    var maxLength = Math.max(
        one.length,
        two.length,
        three.length,
        four.length
    );
    var res = "";
    for (var i = 0; i < maxLength; i++) {
        for (var j = 0; j < arr.length; j++) {
            res += (arr[j].length > i) ? arr[j][i] : "";
        }
    }
    return res;
}
​
```
