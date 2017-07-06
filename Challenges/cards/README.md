# cards
﻿Your task is to write a function that prints out the `n<sup>th</sup>` card of the standard card deck. Each of the cards has a rank which can be, in order of ascending value, a number in range from `2` to `10` (depicted as `'0'`), a Jack (`'J'`), a Queen (`'Q'`), a King (`'K'`), or an Ace (`'A'`). Each of the cards also has a suit: clubs (`'C'`), diamonds (`'D'`), hearts (`'H'`), or spades (`'S'`).

The cards in the deck are sorted first by their suits in [lexicographical order](keyword://lexicographical-order-for-strings), and then by the value of their ranks. Return the `n<sup>th</sup>` (`0`-based) card in the deck as a string with a length of two, with the first character representing the rank and the second character representing the suit.

**Example**

*   For `n = 0`, the output should be
    `cards(n) = "2C"`.

    The very first card in the deck is 2 of clubs, so the answer is `"2C"`.

*   For `n = 34`, the output should be
    `cards(n) = "OH"`.

    The `34<sup>th</sup>` card in the deck is 10 of hearts, making the answer `"0H"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    _Guaranteed constraints:_
    `0 ≤ n ≤ 51`.

*   **[output] string**

    A string with a length of `2`, representing the `n<sup>th</sup>` card in the deck in the format described above.


## My Solution
```javascript
﻿function cards(n) {
    var count = 0,
        suits = ['C', 'D', 'H', 'S'],
        cards = [2, 3, 4, 5, 6, 7, 8, 9, 0, 'J', 'Q', 'K', 'A'];
    for (var i in suits) {
        for (var j in cards) {
            if (count == n) return cards[j] + suits[i];
            count++;
        }
    }
}
​
```
