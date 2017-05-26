# File Naming
﻿You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of `(k)`, where `k` is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

**Example**

For `names = ["doc", "doc", "image", "doc(1)", "doc"]`, the output should be
`fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.string names**

    _Guaranteed constraints:_
    `5 ≤ names.length ≤ 15`,
    `1 ≤ names[i].length ≤ 15`.

*   **[output] array.string**


## My Solution
```javascript
﻿function fileNaming(names) {
    files = [];
    for (var i = 0; i < names.length; i++) {
        if (files.indexOf(names[i]) == -1) {
            files.push(names[i]);
        } else {
            var num = 1;
            while (files.indexOf(names[i] + "(" + num + ")") != -1) {
                num++;
            }
            files.push(names[i] + "(" + num + ")")
        }
    }
    return files;
}
​
```