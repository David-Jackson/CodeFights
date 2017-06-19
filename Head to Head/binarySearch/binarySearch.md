Given a sorted array to search in and the key of the element whose index we should find, output the index of the element or `-1` if it can't be found.

**Example**

*   For `inputArray = [1, 2, 3, 4]` and `searchElement = 3`, the output should be
    `binarySearch(inputArray, searchElement) = 2`;
*   For `inputArray = [1, 2, 3, 4]` and `searchElement = 5`, the output should be
    `binarySearch(inputArray, searchElement) = -1`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer inputArray**

    A sorted array of disctinct integers.

    _Guaranteed constraints:_
    `1 ≤ inputArray.length ≤ 10<sup>5</sup>`,
    `-10<sup>5</sup> ≤ inputArray[i] ≤ 10<sup>5</sup>`.

*   **[input] integer searchElement**

    _Guaranteed constraints:_
    `-10<sup>5</sup> ≤ searchElement ≤ 10<sup>5</sup>`.

*   **[output] integer**