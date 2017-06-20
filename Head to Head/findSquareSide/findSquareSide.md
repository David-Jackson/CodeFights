Given a square's vertices in arbitrary order, find `(the length of the square's side)<sup>2</sup>`.

**Example**

For `x = [0, 1, 0, 1]` and `y = [0, 1, 1, 0]`, the output should be
`findSquareSide(x, y) = 1`.

Check out the image below for better understanding:

![](images/example.png)

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer x**

    Array of `4` integers representing `x`-coordinates of the vertices of a square.

    _Guaranteed constraints:_
    `-5 ≤ x[i] ≤ 5`.

*   **[input] array.integer y**

    Array of `4` integers representing `y`-coordinates of the vertices of a square. `i<sup>th</sup>` elements of both `x` and `y` correspond to a single point.

    _Guaranteed constraints:_
    `-5 ≤ y[i] ≤ 5`.

*   **[output] integer**

    The length of the square's side squared.