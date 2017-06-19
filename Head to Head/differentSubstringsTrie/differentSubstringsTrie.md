Given a string, find the number of different non-empty [substrings](keyword://substring) in it.

**Example**

For `inputString = "abac"`, the output should be
`differentSubstringsTrie(inputString) = 9`.
They are:

```
"a", "b", "c",
"ab", ac", "ba",
"aba", "bac",
"abac"

```

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A string consisting only of lowercase English letters.

    _Guaranteed constraints:_
    `3 ≤ inputString.length ≤ 15`.

*   **[output] integer**