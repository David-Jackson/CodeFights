# simplifyPath
﻿Given an absolute file path (Unix-style), shorten it to the format `/<dir<sub>1</sub>>/<dir<sub>2</sub>>/<dir<sub>3</sub>>/...`.

Here is some info on Unix file system paths:

*   `/` is the root directory; the path should always start with it even if it isn't there in the given `path`;
*   `/` is also used as a directory separator; for example, `/code/fights` denotes a `fights` subfolder in the `code` folder in the root directory;
    *   this also means that `//` stands for "change the current directory to the current directory"
*   `.` is used to mark the current directory;
*   `..` is used to mark the parent directory; if the current directory is root already, `..` does nothing.

**Example**

For `path = "/home/a/./x/../b//c/"`, the output should be
`simplifyPath(path) = "/home/a/b/c"`.

Here is how this path was simplified:
* `/./` means "move to the current directory" and can be replaced with a single `/`;
* `/x/../` means "move into directory `x` and then return back to the parent directory", so it can replaced with a single `/`;
* `//` means "move to the current directory" and can be replaced with a single `/`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string path**

    A line containing a path presented in Unix style format. All directories in the path are guaranteed to consist only of English letters.

    _Guaranteed constraints:_
    `1 ≤ path.length ≤ 5 · 10<sup>4</sup>`.

*   **[output] string**

    The simplified path.


## My Solution
```javascript
﻿function simplifyPath(path) {
    var folders = path.split("/");
    var simple = [];
    for (var i = 0; i < folders.length; i++) {
        var f = folders[i];
        if (f == "..") {
            simple.pop();
        } else if (!(f == "" | f == ".")) {
            simple.push(f);
        }
    }
    simple = [""].concat(
        (simple.length == 0) ? [""] : simple
    );
    return simple.join("/");
}
​
```
