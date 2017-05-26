# Valid Time
﻿Check if the given string is a correct time representation of the 24-hour clock.

**Example**

*   For `time = "13:58"`, the output should be
    `validTime(time) = true`;
*   For `time = "25:51"`, the output should be
    `validTime(time) = false`;
*   For `time = "02:76"`, the output should be
    `validTime(time) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string time**

    A string representing time in `HH:MM` format. It is guaranteed that the first two characters, as well as the last two characters, are digits.

*   **[output] boolean**

    `true` if the given representation is correct, `false` otherwise.


## My Solution
```javascript
﻿function validTime(time) {
    var arr = time.split(":");
    if (arr.length != 2 ||
        arr[0].length != 2 ||
        arr[1].length != 2) return false;
    var h = parseInt(arr[0]);
    var m = parseInt(arr[1]);
    return h >= 0 && h < 24 && m >= 0 && m < 60;
}
​
```
