Given a sorted array of integers `a`, find such an integer `x` that the value of

```
abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

```

is the _smallest possible_ (here `abs` denotes the absolute value).
If there are several possible answers, output the _smallest_ one.

**Example**

For `a = [2, 4, 7]`, the output should be
`absoluteValuesSumMinimization(a) = 4`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer a**

    A non-empty array of integers, sorted in ascending order.

    _Guaranteed constraints:_
    `1 ≤ a.length ≤ 200`,
    `-10<sup>6</sup> ≤ a[i] ≤ 10<sup>6</sup>`.

*   **[output] integer**