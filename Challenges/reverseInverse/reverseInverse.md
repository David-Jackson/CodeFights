Given a string `s`, your mission is to apply the following easy-to-comprehend algorithm to it:

1.  Find all the _words_ in `s`, where a _word_ is a sequence of consecutive alphanumeric characters with no other letters around it;
2.  Reverse the characters in each _word_;
3.  For each _word_, swap the cases of its characters so that the case of a character at each position differs from the case at the corresponding position of the original (unreversed) _word_.

Return the obtained string as the answer.

**Example**

For `s = "So, what is CodeFights?"`, the answer should be
`reverseInverse(s) = "oS, TAHW SI sTHGiFEDOC?"`.

There are `4` _words_ in `s`: `"So"`, `"what"`, `"is"`, and `"CodeFights"`. Let's take the word `"CodeFights"` as an example:

*   The letters `'C'` at index `0` and letter `'F'` at index `4` are uppercase, while all the other letters are lowercase;
*   `"codefights"` reversed becomes `"sthgifedoc"`;
*   With the cases swapped, the letters at indices `0` and `4` should be lowercase and all the other letters should be uppercase;
*   Thus, the final word is `"sTHGiFEDOC"`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string s**

    A string containing only alphanumeric characters and punctuation marks.

    _Guaranteed constraints:_
    `0 ≤ s.length < 500`.

*   **[output] string**

    The result of applying the algorithm described above to `s`.