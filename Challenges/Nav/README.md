# Nav
﻿This is a [reverse challenge](keyword://reverse-challenge), enjoy!

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string d**

    A string containing characters `'>'`, `'<'`, `'+'`, `'^'`, `'-'` and `'v'`.

    _Guaranteed constraints:_
    `1 ≤ d.length ≤ 1000`.

*   **[output] array.integer**

    An array of three elements.


## My Solution
```javascript
﻿function Nav(d) {
    var x = y = z = 0;
    for (var i in d) {
        switch (d[i]) {
            case '^':
                x--;break;
            case 'v':
                x++;break;
            case '<':
                y--;break;
            case '>':
                y++;break;
            case '-':
                z--;break;
            case '+':
                z++;break;
        }
    }
    return [x, y, z];
}
​
```
