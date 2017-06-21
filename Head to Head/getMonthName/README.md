# getMonthName
﻿Map the given integer to a month.

**Example**

*   For `mo = 1`, the output should be
    `getMonthName(mo) = "Jan"`;
*   For `mo = 0`, the output should be
    `getMonthName(mo) = "invalid month"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer mo**

    A non-negative integer.

    _Guaranteed constraints:_
    `0 ≤ mo ≤ 15`.

*   **[output] string**

    A `3`-letter abbreviation of month number `mo` or "invalid month" if the month doesn't exist.

    Here are abbreviations of all months:

    | Month id | Month | Abbreviation |
    | 1 | January | Jan |
    | 2 | February | Feb |
    | 3 | March | Mar |
    | 4 | April | Apr |
    | 5 | May | May |
    | 6 | June | Jun |
    | 7 | July | Jul |
    | 8 | August | Aug |
    | 9 | September | Sep |
    | 10 | October | Oct |
    | 11 | November | Nov |
    | 12 | December | Dec |


## My Solution
```javascript
﻿function getMonthName(mo) {
    var month = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
    return (mo > 0 && mo <= 12) ? month[mo - 1] : 'invalid month';
}
​
```
