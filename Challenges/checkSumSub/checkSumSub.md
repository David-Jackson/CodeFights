You are given an array of integers `arr` and a target `k`. Your task is to figure out whether you can pick a [subarray](keyword://contiguous-subarray) of `arr` such that its elements add up to `k`.

**Example**

For `arr = [0, 1, 2, 3, 4, 5]` and `k = 7`, the answer should be
`checkSum(arr, k) = true`.

The sum of the elements of the subarray `[3, 4]` is exactly `7`, so the answer is `true`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer arr**

    _Guaranteed constraints:_
    `0 ≤ arr.length ≤ 10<sup>5</sup>`,
    `-5000 < arr[i] < 5000`.

*   **[input] integer k**

    _Guaranteed constraints:_
    `-10<sup>9</sup> < k < 10<sup>9</sup>`.

*   **[output] boolean**

    Return `true` if some subarray of `arr` contains elements that add up to `k`, otherwise return `false`.