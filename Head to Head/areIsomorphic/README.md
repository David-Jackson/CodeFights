# areIsomorphic
﻿Two two-dimensional arrays are _isomorphic_ if they have the same number of rows and each pair of respective rows contains the same number of elements.

Given two two-dimensional arrays, check if they are isomorphic.

**Example**

*   For

    ```
    array1 = [[1, 1, 1],
              [0, 0]]

    ```

    and

    ```
    array2 = [[2, 1, 1],
              [2, 1]]

    ```

    the output should be
    `areIsomorphic(array1, array2) = true`;

*   For

    ```
    array1 = [[2],
              []]

    ```

    and

    ```
    array2 = [[2]]

    ```

    the output should be
    `areIsomorphic(array1, array2) = false`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.array.integer array1**

    _Guaranteed constraints:_
    `1 ≤ array1.length ≤ 5`,
    `0 ≤ array1[i].length ≤ 5`,
    `0 ≤ array1[i][j] ≤ 50`.

*   **[input] array.array.integer array2**

    _Guaranteed constraints:_
    `1 ≤ array2.length ≤ 5`,
    `0 ≤ array2[i].length ≤ 5`,
    `0 ≤ array2[i][j] ≤ 50`.

*   **[output] boolean**


## My Solution
```javascript
﻿function areIsomorphic(array1, array2) {
​
  if (array1.length !== array2.length) {
    return  false ;
  }
​
  for (var i = 0; i < array1.length; i++) {
    if (array1[i].length !== array2[i].length) {
      return false;
    }
  }
​
  return true;
}
​
```
