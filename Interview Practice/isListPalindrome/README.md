# isListPalindrome
﻿_Note: Try to solve this task in `O(n)` time using `O(1)` additional space, where `n` is the number of elements in `l`, since this is what you'll be asked to do during an interview._

Given a singly linked list of integers, determine whether or not it's a [palindrome](keyword://palindrome).

**Example**

*   For `l = [0, 1, 0]`, the output should be
    `isListPalindrome(l) = true`;
*   For `l = [1, 2, 2, 3]`, the output should be
    `isListPalindrome(l) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] linkedlist.integer l**

    A singly linked list of integers.

    _Guaranteed constraints:_
    `0 ≤ list size ≤ 5 · 10<sup>5</sup>`,
    `-10<sup>9</sup> ≤ element value ≤ 10<sup>9</sup>`.

*   **[output] boolean**

    Return `true` if `l` is a palindrome, otherwise return `false`.


## My Solution
```javascript
﻿// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    var forward = "";
    var reverse = "";
    while (l) {
        forward += l.value + "|";
        reverse = l.value + "|" + reverse;
        if (l.next == null) break;
        l = l.next;
    }
    return forward.substring(0, Math.max(0, forward.length - 1)) == 
        reverse.substring(0, Math.max(0, reverse.length - 1));
}
​
```
