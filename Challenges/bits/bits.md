Given a array of positive integers, your task is to _maximize_ each value in it. You have two ways to _maximize_ a number:

1.  Swap any two bits in its binary representation;
2.  Do nothing. (Hey, you won't _minimize_ a number this way either!)

**Example**

For `numbers = [1, 5, 9]`, the output should be
`bits(numbers) = [1, 6, 12]`.

Here's how each of the numbers can be _maximized_:

*   `1<sub>10</sub> = 1<sub>2</sub>`, so there's nothing to be done with it;
*   `5<sub>10</sub> = 101<sub>2</sub>`, which can be _maximized_ by swapping the last two bits to obtain `110<sub>2</sub> = 6<sub>10</sub>`;
*   `9<sub>10</sub> = 1001<sub>2</sub>`, which can be _maximized_ by swapping the second and the fourth bits to obtain `1100<sub>2</sub> = 12<sub>10</sub>`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer64 numbers**

    _Guaranteed constraints:_
    `1 ≤ numbers.length ≤ 1000`,
    `1 ≤ numbers[i] < 2<sup>50</sup>`.

*   **[output] array.integer64**

    The _maximized_ array of `numbers`.